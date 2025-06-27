// Licensed to Elasticsearch B.V. under one or more contributor
// license agreements. See the NOTICE file distributed with
// this work for additional information regarding copyright
// ownership. Elasticsearch B.V. licenses this file to you under
// the Apache License, Version 2.0 (the "License"); you may
// not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.

use std::collections::{HashMap, HashSet};

use anyhow::bail;
use indexmap::IndexMap;

use crate::*;

#[derive(Default)]
struct Ctx {
    new_types: IndexMap<TypeName, TypeDefinition>,
    types_seen: std::collections::HashSet<TypeName>,
    config: ExpandConfig,
}

/// Generic parameters of a type
type GenericParams = Vec<TypeName>;
/// Generic arguments for an instantiated generic type
type GenericArgs = Vec<ValueOf>;
/// Mapping from generic arguments to values
type GenericMapping = HashMap<TypeName, ValueOf>;

#[derive(Clone, Debug)]
pub struct ExpandConfig {
    /// Generic types that will be inlined by replacing them with their definition, propagating generic arguments.
    pub unwrap: HashSet<TypeName>,
    // Generic types that will be unwrapped by replacing them with their (single) generic parameter.
    pub inline: HashSet<TypeName>,
}

impl Default for ExpandConfig {
    fn default() -> Self {
        ExpandConfig {
            unwrap: Default::default(),
            inline: HashSet::from([builtins::WITH_NULL_VALUE])
        }
    }
}

/// Expand all generics by creating new concrete types for every instantiation of a generic type.
///
/// The resulting model has no generics anymore. Top-level generic parameters (e.g. SearchRequest's TDocument) are
/// replaced by user_defined_data.
pub fn expand(model: IndexedModel, config: ExpandConfig) -> anyhow::Result<IndexedModel> {
    let mut model = model;
    let mut ctx = Ctx {
        config,
        ..Ctx::default()
    };

    for endpoint in &model.endpoints {
        for name in [&endpoint.request, &endpoint.response].into_iter().flatten() {
            expand_root_type(name, &model, &mut ctx)?;
        }
    }

    // Add new types that were created to the model
    ctx.new_types.sort_keys();
    model.types = ctx.new_types;

    return Ok(model);

    //---------------------------------------------------------------------------------------------
    // Expanding types
    //---------------------------------------------------------------------------------------------

    fn expand_root_type(t: &TypeName, model: &IndexedModel, ctx: &mut Ctx) -> anyhow::Result<()> {
        const NO_GENERICS: &Vec<TypeName> = &Vec::new();
        const USER_DEFINED: ValueOf = ValueOf::UserDefinedValue(UserDefinedValue {});

        use TypeDefinition::*;
        let generics = match model.get_type(t)? {
            Interface(itf) => &itf.generics,
            Request(req) => &req.generics,
            Response(resp) => &resp.generics,
            Enum(_) | TypeAlias(_) => NO_GENERICS,
        };

        // Top-level generic parameters (e.g. TDocument in SearchResponse) are set to UserDefined
        let args: GenericArgs = generics.iter().map(|_| USER_DEFINED).collect();

        expand_type(t, args, model, ctx)?;

        Ok(())
    }

    /// Expand a type definition, given concrete values for its generic parameters.
    /// The new type definition is stored in the context.
    ///
    /// Returns the name to use for this (type, args) combination
    fn expand_type(
        name: &TypeName,
        args: GenericArgs,
        model: &IndexedModel,
        ctx: &mut Ctx,
    ) -> anyhow::Result<TypeName> {
        if name.is_builtin() {
            return Ok(name.clone());
        }

        let def = model.get_type(name)?;
        let name = expanded_name(def.name(), &args);

        if !ctx.types_seen.contains(&name) {
            // Mark it as seen to avoid infinite recursion
            ctx.types_seen.insert(name.clone());

            let mut new_def = match def {
                TypeDefinition::Interface(ref itf) => expand_interface(itf, args, model, ctx)?,
                TypeDefinition::Request(req) => expand_request(req, args, model, ctx)?,
                TypeDefinition::Response(resp) => expand_response(resp, args, model, ctx)?,
                TypeDefinition::TypeAlias(ref alias) => expand_type_alias(alias, args, model, ctx)?,
                TypeDefinition::Enum(_) => def.clone(),
            };
            new_def.base_mut().name = name.clone();
            ctx.new_types.insert(name.clone(), new_def);
        }

        Ok(name)
    }

    fn expand_interface(
        itf: &Interface,
        args: GenericArgs,
        model: &IndexedModel,
        ctx: &mut Ctx,
    ) -> anyhow::Result<TypeDefinition> {
        // Clone and modify in place
        let mut itf = itf.clone();

        let mappings = param_mapping(&itf.generics, args);

        itf.generics = Vec::new();

        if let Some(inherit) = itf.inherits {
            itf.inherits = Some(expand_inherits(inherit, &mappings, model, ctx)?);
        }

        if !itf.behaviors.is_empty() {
            itf.behaviors.iter().for_each(|b| {
                if b.generics.is_empty() {
                    // If the behavior has no generics, we can just expand it
                    let _ = expand_type(&b.typ, Vec::new(), model, ctx);
                }
            });
        }

        // We keep the generic parameters of behaviors, but expand their value
        for behavior in &mut itf.behaviors {
            for arg in &mut behavior.generics {
                *arg = expand_valueof(arg, &mappings, model, ctx)?;
            }
        }

        expand_properties(&mut itf.properties, &mappings, model, ctx)?;

        Ok(itf.into())
    }

    fn expand_request(
        req: &Request,
        args: GenericArgs,
        model: &IndexedModel,
        ctx: &mut Ctx,
    ) -> anyhow::Result<TypeDefinition> {
        // Clone and modify in place
        let mut req = req.clone();

        let mappings = param_mapping(&req.generics, args);
        req.generics = Vec::new();

        if let Some(inherit) = req.inherits {
            req.inherits = Some(expand_inherits(inherit, &mappings, model, ctx)?);
        }

        expand_behaviors(&mut req.behaviors, &mappings, model, ctx)?;
        expand_properties(&mut req.path, &mappings, model, ctx)?;
        expand_properties(&mut req.query, &mappings, model, ctx)?;
        expand_body(&mut req.body, &mappings, model, ctx)?;

        Ok(req.into())
    }

    fn expand_response(
        resp: &Response,
        args: GenericArgs,
        model: &IndexedModel,
        ctx: &mut Ctx,
    ) -> anyhow::Result<TypeDefinition> {
        // Clone and modify in place
        let mut resp = resp.clone();

        let mappings = param_mapping(&resp.generics, args);
        resp.generics = Vec::new();

        expand_behaviors(&mut resp.behaviors, &mappings, model, ctx)?;
        expand_body(&mut resp.body, &mappings, model, ctx)?;
        
        for exception in &mut resp.exceptions {
            expand_body(&mut exception.body, &mappings, model, ctx)?;
        }

        Ok(resp.into())
    }

    fn expand_type_alias(
        t: &TypeAlias,
        args: GenericArgs,
        model: &IndexedModel,
        ctx: &mut Ctx,
    ) -> anyhow::Result<TypeDefinition> {
        let mapping = param_mapping(&t.generics, args);
        let value = expand_valueof(&t.typ, &mapping, model, ctx)?;

        Ok(TypeDefinition::TypeAlias(TypeAlias {
            base: t.base.clone(),
            generics: Vec::new(),
            typ: value,
            variants: t.variants.clone(),
        }))
    }

    //---------------------------------------------------------------------------------------------
    // Expanding type parts in place
    //---------------------------------------------------------------------------------------------

    fn expand_inherits(
        i: Inherits,
        mappings: &GenericMapping,
        model: &IndexedModel,
        ctx: &mut Ctx,
    ) -> anyhow::Result<Inherits> {
        let expanded = expand_valueof(
            &InstanceOf {
                typ: i.typ,
                generics: i.generics,
            }
            .into(),
            mappings,
            model,
            ctx,
        )?;

        if let ValueOf::InstanceOf(inst) = expanded {
            Ok(Inherits {
                typ: inst.typ,
                generics: Vec::new(),
            })
        } else {
            bail!("Inherits clause doesn't expand to an instance_of: {:?}", &expanded);
        }
    }

    /// Expand behaviors in place
    fn expand_behaviors(
        behaviors: &mut Vec<Inherits>,
        mappings: &GenericMapping,
        model: &IndexedModel,
        ctx: &mut Ctx,
    ) -> anyhow::Result<()> {
        // We keep the generic parameters of behaviors, but expand their value
        for behavior in behaviors {
            for arg in &mut behavior.generics {
                *arg = expand_valueof(arg, mappings, model, ctx)?;
            }
        }
        Ok(())
    }

    /// Expand properties in place
    fn expand_properties(
        props: &mut Vec<Property>,
        mappings: &GenericMapping,
        model: &IndexedModel,
        ctx: &mut Ctx,
    ) -> anyhow::Result<()> {
        for prop in props {
            prop.typ = expand_valueof(&prop.typ, mappings, model, ctx)?;
        }
        Ok(())
    }

    /// Expand body in place
    fn expand_body(
        body: &mut Body,
        mappings: &GenericMapping,
        model: &IndexedModel,
        ctx: &mut Ctx,
    ) -> anyhow::Result<()> {
        match body {
            Body::Value(ref mut value) => {
                value.value = expand_valueof(&value.value, mappings, model, ctx)?;
            }
            Body::Properties(ref mut prop_body) => {
                expand_properties(&mut prop_body.properties, mappings, model, ctx)?;
            }
            Body::NoBody(_) => {}
        }

        Ok(())
    }

    //---------------------------------------------------------------------------------------------
    // Expanding values
    //---------------------------------------------------------------------------------------------

    fn expand_valueof(
        value: &ValueOf,
        mappings: &GenericMapping,
        model: &IndexedModel,
        ctx: &mut Ctx,
    ) -> anyhow::Result<ValueOf> {
        match value {
            ValueOf::ArrayOf(ref arr) => {
                let value = expand_valueof(&arr.value, mappings, model, ctx)?;
                Ok(ArrayOf { value: Box::new(value) }.into())
            }

            ValueOf::DictionaryOf(dict) => {
                let key = expand_valueof(&dict.key, mappings, model, ctx)?;
                let value = expand_valueof(&dict.value, mappings, model, ctx)?;
                Ok(DictionaryOf {
                    single_key: dict.single_key,
                    key: Box::new(key),
                    value: Box::new(value),
                }
                .into())
            }

            ValueOf::InstanceOf(inst) => {
                // If this is a generic parameter, return its mapping
                if let Some(p) = mappings.get(&inst.typ) {
                    return Ok(p.clone());
                }

                // Inline or unwrap if required by the config
                if ctx.config.inline.contains(&inst.typ) {
                    return inline_generic_type(inst, mappings, model, ctx);
                }
                if ctx.config.unwrap.contains(&inst.typ) {
                    return unwrap_generic_type(inst, mappings, model, ctx);
                }

                // Expand generic parameters, if any
                let args = inst
                    .generics
                    .iter()
                    .map(|arg| expand_valueof(arg, mappings, model, ctx))
                    .collect::<Result<Vec<_>, _>>()?;

                Ok(InstanceOf {
                    typ: expand_type(&inst.typ, args, model, ctx)?,
                    generics: Vec::new(),
                }
                .into())
            }

            ValueOf::UnionOf(u) => {
                let items = u
                    .items
                    .iter()
                    .map(|item| expand_valueof(item, mappings, model, ctx))
                    .collect::<Result<Vec<_>, _>>()?;
                Ok(UnionOf { items }.into())
            }

            ValueOf::UserDefinedValue(_) => Ok(value.clone()),

            ValueOf::LiteralValue(_) => Ok(value.clone()),
        }
    }

    /// Inlines a value of a generic type by replacing it with its definition, propagating
    /// generic arguments.
    fn inline_generic_type(
        value: &InstanceOf,
        _mappings: &GenericMapping,
        model: &IndexedModel,
        ctx: &mut Ctx,
    ) -> anyhow::Result<ValueOf> {

        // It has to be an alias (e.g. WithNullValue)
        if let TypeDefinition::TypeAlias(inline_def) = model.get_type(&value.typ)? {
            // Create mappings to resolve types in the inlined type's definition
            let mut inline_mappings = GenericMapping::new();
            for (source, dest) in inline_def.generics.iter().zip(value.generics.iter()) {
                inline_mappings.insert(source.clone(), dest.clone());
            }
            // and expand the inlined type's alias definition
            let result = expand_valueof(&inline_def.typ, &inline_mappings, model, ctx)?;
            return Ok(result);
        } else {
            bail!("Expecting inlined type {} to be an alias", &value.typ);
        }
    }

    /// Unwraps a value of a generic type by replacing it with its generic parameter
    fn unwrap_generic_type(
        value: &InstanceOf,
        mappings: &GenericMapping,
        model: &IndexedModel,
        ctx: &mut Ctx,
    ) -> anyhow::Result<ValueOf> {

        // It has to be an alias (e.g. Stringified)
        if let TypeDefinition::TypeAlias(_unwrap_def) = model.get_type(&value.typ)? {
            // Expand the inlined type's generic argument (there must be exactly one)
            if value.generics.len() != 1 {
                bail!("Expecting unwrapped type {} to have exactly one generic parameter", &value.typ);
            }
            let result = expand_valueof(&value.generics[0], mappings, model, ctx)?;
            return Ok(result);
        } else {
            bail!("Expecting unwrapped type {} to be an alias", &value.typ);
        }
    }

    //---------------------------------------------------------------------------------------------
    // Misc
    //---------------------------------------------------------------------------------------------

    /// Builds the mapping from generic parameter name to actual value
    fn param_mapping(generics: &GenericParams, args: GenericArgs) -> GenericMapping {
        generics.iter().cloned().zip(args).collect()
    }

    /// Creates an expanded type name if needed (i.e. when `generics` is not empty)
    fn expanded_name(type_name: &TypeName, args: &GenericArgs) -> TypeName {
        if args.is_empty() {
            return type_name.clone();
        }

        let mut name: String = type_name.name.to_string();
        for arg in args {
            if let ValueOf::UserDefinedValue(_) = arg {
                // Top-level types. Don't append it.
            } else {
                push_valueof_name(&mut name, arg);
            }
        }

        TypeName {
            namespace: type_name.namespace.clone(),
            name: name.into(),
        }
    }

    /// Appends the type representation of a value to a string
    fn push_valueof_name(name: &mut String, value: &ValueOf) {
        use std::fmt::Write;
        match value {
            ValueOf::LiteralValue(lit) => write!(name, "{}", lit).unwrap(),
            ValueOf::UserDefinedValue(_) => write!(name, "UserDefined").unwrap(),
            ValueOf::ArrayOf(a) => {
                name.push_str("Array");
                push_valueof_name(name, a.value.as_ref());
            }
            ValueOf::DictionaryOf(dict) => {
                // Don't care about key, it's always aliased to string
                name.push_str("Dict");
                push_valueof_name(name, dict.value.as_ref())
            }
            ValueOf::UnionOf(u) => {
                name.push_str("Union");
                for item in &u.items {
                    push_valueof_name(name, item)
                }
            }
            ValueOf::InstanceOf(inst) => {
                // Append unqualified name (assuming we have no duplicate generic value for the same type)
                name.push_str(&inst.typ.name);
            }
        }
    }
}

#[cfg(test)]
mod tests {
    use std::io::Write;

    use super::*;

    #[test]
    pub fn compare_with_js_version() -> testresult::TestResult {
        let canonical_json = {
            // Deserialize and reserialize to have a consistent JSON format
            let json = std::fs::read_to_string("../../output/schema/schema-no-generics.json")?;
            let model: IndexedModel = serde_json::from_str(&json)?;
            serde_json::to_string_pretty(&model)?
        };

        let schema_json = std::fs::read_to_string("../../output/schema/schema.json")?;
        let model: IndexedModel = serde_json::from_str(&schema_json)?;
        let model = expand(model, ExpandConfig::default())?;

        let json_no_generics = serde_json::to_string_pretty(&model)?;

        if canonical_json != json_no_generics {
            std::fs::create_dir_all("test-output")?;
            let mut out = std::fs::File::create("test-output/schema-no-generics-canonical.json")?;
            out.write_all(canonical_json.as_bytes())?;

            let mut out = std::fs::File::create("test-output/schema-no-generics-new.json")?;
            out.write_all(json_no_generics.as_bytes())?;

            panic!("Output differs from the canonical version. Both were written to 'test-output'");
        }

        Ok(())
    }
}
