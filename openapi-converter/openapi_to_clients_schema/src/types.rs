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

use clients_schema::*;
use openapiv3::*;
use indexmap::IndexMap;
use std::collections::{BTreeMap, HashSet};
use anyhow::{anyhow, bail};
use tracing::{error, info};
use crate::openapi;
use crate::openapi::{OpenAPI, RefOrSchema};

#[derive(Default)]
pub struct Types {
    types: BTreeMap<String, clients_schema::TypeDefinition>,
    tracker: HashSet<String>,
}

impl Types {

    pub fn track(&mut self, id: &str) {
        self.tracker.insert(id.to_string());
    }

    pub fn get(&self, id: &str) -> Option<&TypeDefinition> {
        self.types.get(id)
    }

    pub fn add(&mut self, id: &str, type_def: TypeDefinition) {
        //info!("Adding type '{id}'");
        self.types.insert(id.to_string(), type_def);
    }

    pub fn types(self) -> Vec<TypeDefinition> {
        self.types.into_values().collect()
    }

    pub fn check_tracker(&self) -> anyhow::Result<()> {
        info!("Generated {} types", self.types.len());
        let mut failed = false;
        for id in self.tracker.iter() {
            if !self.types.contains_key(id) {
                error!("Type '{id}' tracked but but not generated.");
                failed = true;
            }
        }

        if failed {
            Err(anyhow!("Some tracked types were not generated - check the logs"))
        } else {
            Ok(())
        }
    }
}

///
/// Generate a top-level type, which can be an alias or a type definition
///
pub fn generate_type (
    open_api: &OpenAPI,
    id: &str,
    definition: &RefOrSchema,
    types: &mut Types
) -> anyhow::Result<TypeName> {

    //info!("Generating type '{id}'");
    types.track(id);
    match definition {
        RefOrSchema::Ref(ref_id) => {
            // Type alias
            let type_name = ref_to_typename(id);
            types.add(id, TypeDefinition::type_alias(
                type_name.clone(),
                ref_to_typename(&ref_id).into()
            ));
            Ok(type_name)
        }
        RefOrSchema::Schema(schema) => {
            // Type definition
            generate_type_for_schema(open_api, id, schema, types)
        }
    }
}

///
/// Generate a type definition from an OpenAPI component schema.
/// This can result in several types if the schema contains anonymous nested structures
///
fn generate_type_for_schema(
    open_api: &OpenAPI,
    id: &str,
    schema: &Schema,
    types: &mut Types
) -> anyhow::Result<TypeName> {

    if let Some(typedef) = types.get(id) {
        //info!("Type '{id}' already generated");
        return Ok(typedef.name().clone());
    }

    types.track(id);

    // Build the common "base" fields from the OpenApi schema_data
    let type_name = id_to_typename(id);
    let data = &schema.schema_data;
    let mut base = BaseType::new(type_name.clone());
    base.description = data.description.clone();
    if data.deprecated {
        base.deprecation = Some(Deprecation {version: "".into(), description: "".into()})
    }
    if let Some(ref docs) = data.external_docs {
        base.doc_url = Some(docs.url.clone())
    }

    // TODO: data.readonly/writeonly -> OverloadOf?
    // TODO: data.default -> serverDefault
    // TODO: data.extensions -> see what's there, fail on unknown ones
    for (k, v) in &data.extensions {
        info!("{id} - extension {k} = {v}");
    }

    if data.discriminator.is_some() {
        // FIXME: data.discriminator -> internally tagged variant

        bail!("Discriminator in schema {} has to become an internally tagged variant", id);
    }

    use openapiv3::SchemaKind::*;
    match &schema.schema_kind {
        Type(t) => {
            // Type alias to a primitive type or enum
            generate_schema_kind_type(open_api, id, t, base, types)?;
        }
        Not {..} => {
            bail!("Unsupported schema kind for '{}' - {:?}", id, schema.schema_kind);
        },
        Any(any) => {
            let not_any = Schema {
                schema_data: data.clone(),
                schema_kind: openapi::any_to_schema(any.clone())?
            };
            generate_type_for_schema(open_api, id, &not_any, types)?;
        },
        // Definitions:
        // - oneOf: validates the value against exactly one of the subschemas
        // - anyOf: validates the value against any (one or more) of the subschemas
        // - allOf – validates the value against all the subschemas
        //
        // AnyOf sits in between oneOf and allOf and doesn't have a direct equivalence in schema.json
        // We choose to handle it like a oneOf, even if oneOf is more constrained, as allOf is used for
        // composition/inheritance.
        AllOf {all_of} => {
            let merged = open_api.merge_schemas(&all_of, &data)?;
            generate_type_for_schema(open_api, id, &merged, types)?;
        }
        AnyOf {any_of: one_of} | OneOf {one_of} => {
            generate_schema_kind_one_of(open_api, id, one_of, &data.discriminator, base, types)?;
        }
    }

    Ok(type_name)
}

///
/// Generate the TypeDefinition for an openapi::SchemaKind::Type
/// - `id`: name of the enclosing OpenApi type
/// - `t`: the OpenApi type definition
/// - `base`: common fields for the type definition
/// - `types`: the target schema types, where the generated definition will be added, along with any synthetic types
///    that may be needed to represent nested structures.
///
fn generate_schema_kind_type(
    open_api: &OpenAPI,
    id: &str,
    t: &openapiv3::Type,
    base: BaseType,
    types: &mut Types
) -> anyhow::Result<()> {

    fn alias(base: BaseType, name: TypeName) -> TypeDefinition {
        TypeDefinition::TypeAlias(TypeAlias {
            base,
            generics: Vec::default(),
            typ: name.into(),
            variants: None,
        })
    }

    use openapiv3::Type::*;

    match t {
        //---------------------------------------------------------------------
        String(string) if !string.enumeration.is_empty() => {
            // Enumeration

            let members = string.enumeration.iter()
                .filter_map(|name| name.as_ref()) // filter empty options. Why are they here?
                .map(|name| name.as_str().into())
                .collect();

            let enum_def = TypeDefinition::Enum(clients_schema::Enum {
                base,
                members,
                is_open: false
            });

            types.add(id, enum_def);
        },

        //---------------------------------------------------------------------
        String(_) => types.add(id, alias(base, builtins::STRING.clone())),

        //---------------------------------------------------------------------
        Boolean {} => types.add(id, alias(base, builtins::BOOLEAN.clone())),

        //---------------------------------------------------------------------
        Integer(_) =>
        // OpenAPI Integer and Number accept an enumeration, but since it's just a list of valid
        // values with no identifier, we can't produce an enum out of that list.
        // TODO: choose int/long depending on min/max values
            types.add(id, alias(base, builtins::LONG.clone())),

        //---------------------------------------------------------------------
        Number(_) => {
            // TODO: choose float/double depending on min/max values
            types.add(id, alias(base, builtins::DOUBLE.clone()));
        }

        //---------------------------------------------------------------------
        Array(array) => {
            // NOTE: array.unique_items indicates a Set. We don't have that in schema.json, and it actually
            // doesn't exist in the JSON data model
            let items = array.items.as_ref().ok_or(anyhow!("Array type in '{}' has no items", id))?;

            let value = generate_value_of(open_api, items.into(), || format!("{}_arrayitem", id), types)?;
            let alias_def = TypeDefinition::TypeAlias(TypeAlias {
                base,
                typ: ValueOf::ArrayOf(ArrayOf { value: Box::new(value) }),
                generics: Vec::default(),
                variants: None,
            });

            types.add(id, alias_def);
        },

        //---------------------------------------------------------------------
        Object(obj) => {
            if let (0, Some(ref value)) = (obj.properties.len(), &obj.additional_properties) {
                // No fixed properties: it's a dictionary
                generate_dictionary_def(open_api, id, base, value, types)?;

            } else {
                // Regular type
                generate_interface_def(open_api, id, base, &obj.required, &obj.properties, &obj.additional_properties, types)?;
            }
        },
    }

    Ok(())
}

fn generate_union_of(
    open_api: &OpenAPI,
    id: &str,
    items: &Vec<ReferenceOr<Schema>>,
    types: &mut Types
) -> anyhow::Result<UnionOf> {
    // Open API items are ref_or_schema that we turn into a value_of
    // If producing that value_of requires the creation of a synthetic type, it will be
    // named by appending the item number to the type name (e.g. "foo_1")
    let items = items.iter()
        .enumerate()
        .map(|(idx, item)| generate_value_of(
            open_api,
            item.into(), || format!("{}_{}", id, idx),
            types
        ))
        .collect::<Result<Vec<_>, _>>()?;

    Ok(UnionOf {
        items,
    })
}

fn generate_schema_kind_one_of(
    open_api: &OpenAPI,
    id: &str,
    one_of: &Vec<ReferenceOr<Schema>>,
    discriminator: &Option<Discriminator>,
    base: BaseType,
    types: &mut Types
) -> anyhow::Result<()> {

    let filtered = one_of.iter().filter(|s| !open_api.is_not(s)).collect::<Vec<_>>();
    if filtered.len() == 1 {
        return generate_type(open_api, id, &filtered[0].into(), types).map(|_| ());
    }

    // Union type

    let union_of = generate_union_of(open_api, id, one_of, types)?;

    let mut variants: Option<TypeAliasVariants> = None;

    // TODO: do we want to allow untagged unions (those that are disambiguated by inspecting property names)?

    if let Some(discriminator) = discriminator {
        variants = Some(TypeAliasVariants::InternalTag(InternalTag {
            default_tag: None,
            tag: discriminator.property_name.clone(),
            non_exhaustive: false,
        }));

        // FIXME: need to set mappings, by setting the discriminator property in every variant to either
        // the type name or the key of in discriminator.mapping
    }

    let type_alias = TypeAlias {
        base,
        typ: ValueOf::UnionOf(union_of),
        generics: Vec::default(),
        variants: variants, // May be set below
    };
    types.add(id, TypeDefinition::TypeAlias(type_alias));

    Ok(())
}

fn generate_dictionary_def(
    open_api: &OpenAPI,
    id: &str,
    base: BaseType,
    value: &AdditionalProperties,
    types: &mut Types
) -> anyhow::Result<()> {
    let dict = TypeDefinition::TypeAlias(TypeAlias {
        base,
        generics: Vec::default(),
        variants: None,
        typ: ValueOf::InstanceOf(InstanceOf {
            typ: builtins::DICTIONARY.clone(),
            generics: vec![
                ValueOf::instance_of(builtins::STRING.clone()),
                match value {
                    AdditionalProperties::Any(_) =>
                        (&builtins::USER_DEFINED).into(),

                    AdditionalProperties::Schema(schema) =>
                        generate_value_of(open_api, schema.into(), || format!("{}_value", id), types)?
                },
            ]
        }),
    });

    types.add(id, dict);
    Ok(())
}

fn generate_interface_def(
    open_api: &OpenAPI,
    id: &str,
    base: BaseType,
    required: &Vec<String>,
    properties: &IndexMap<String, ReferenceOr<Box<Schema>>>,
    additional_properties: &Option<AdditionalProperties>,
    types: &mut Types
) -> anyhow::Result<()> {
    // Regular type

    // FIXME: max_properties -- if == 1 indicates a container

    let required: HashSet<_> = required.iter().collect();
    if required.len() != required.len() {
        bail!("'required' in {id} has duplicate entries");
    }

    let mut props = Vec::new();
    for (name, value) in properties {
        let property = Property {
            name: name.clone(),
            typ: generate_value_of(open_api, value.into(), || format!("{}_{}", id, name), types)?,
            required: required.contains(&name),
            doc_id: None,
            doc_url: None,
            codegen_name: None, // FIXME: extension in workplace search
            description: None,
            aliases: Vec::default(),
            deprecation: None,
            stability: None,
            since: None,
            container_property: false,
            es_quirk: None,
            server_default: None,
        };

        props.push(property);
    };

    let mut typedef = Interface {
        base,
        properties: props,
        generics: Vec::default(),
        behaviors: Vec::default(),
        attached_behaviors: Vec::default(),
        inherits: None,
        implements: Vec::default(),
        variants: None,
        shortcut_property: None,
    };

    if let Some(props) = additional_properties {
        let prop_value: ValueOf = match props {
            AdditionalProperties::Any(_) => (&builtins::USER_DEFINED).into(),
            AdditionalProperties::Schema(schema) => generate_value_of(open_api, schema.into(), || format!("{id}_props"), types)?,
        };
        typedef.behaviors.push(clients_schema::Inherits {
            typ: builtins::ADDITIONAL_PROPERTIES.clone(),
            generics: vec![prop_value],
        })
    };

    types.add(id, TypeDefinition::Interface(typedef));
    Ok(())
}

///
/// Generate a value_of for a reference or a schema. If the schema doesn't denote one that can be represented as a
/// value_of, a synthetic type is produced.
///
fn generate_value_of(
    open_api: &OpenAPI,
    value: RefOrSchema,
    id_gen: impl Fn() -> String,
    types: &mut Types
) -> anyhow::Result<ValueOf> {

    match value {
        RefOrSchema::Ref(reference) => {
            Ok(ref_to_typename(reference).into())
        },
        RefOrSchema::Schema(schema) => {
            generate_value_for_schema(open_api, schema, id_gen, types)
        }
    }
}

fn generate_value_for_schema(
    open_api: &OpenAPI,
    schema: &Schema,
    id_gen: impl Fn() -> String,
    types: &mut Types
) -> anyhow::Result<ValueOf> {

    use openapiv3::SchemaKind::*;
    match &schema.schema_kind {
        Type(typ) => {
            use openapiv3::Type::*;
            match typ {
                String(string) if string.enumeration.is_empty() => {
                    Ok((&builtins::STRING).into())
                }
                String(_) => {
                    let type_name = generate_type_for_schema(open_api, &id_gen(), &schema, types)?;
                    Ok(type_name.into())
                }
                Number(_) => {
                    // TODO: choose float/double depending on min/max values
                    // (see also generate_schema_kind_type)
                    Ok((&builtins::DOUBLE).into())
                }
                Integer(_) => {
                    // TODO: choose int/long depending on min/max values
                    // (see also generate_schema_kind_type)
                    Ok((&builtins::LONG).into())
                }
                Object(_) => {
                    let type_name = generate_type_for_schema(open_api, &id_gen(), &schema, types)?;
                    Ok(type_name.into())
                }
                Array(array) => {
                    let item = array.items.as_ref().ok_or(anyhow!("Array type in '{}' has no items", id_gen()))?;
                    let item = generate_value_of(open_api, item.into(), id_gen, types)?;
                    Ok(ValueOf::ArrayOf(ArrayOf {value: Box::new(item)}))
                }
                Boolean { .. } => {
                    Ok((&builtins::BOOLEAN).into())
                }
            }
        },
        // Do not factorize below to keep exhaustiveness, if some specific handling is needed/possible
        OneOf { .. } => {
            let type_name = generate_type_for_schema(open_api, &id_gen(), schema, types)?;
            Ok(type_name.into())
        }
        AllOf { .. } => {
            let type_name = generate_type_for_schema(open_api, &id_gen(), schema, types)?;
            Ok(type_name.into())
        }
        AnyOf { .. } => {
            let type_name = generate_type_for_schema(open_api, &id_gen(), schema, types)?;
            Ok(type_name.into())
        }
        Not { .. } => {
            Ok((&builtins::VOID).into())
        }
        Any(AnySchema{ typ: Some(typ), .. }) if typ == "null" => {
            Ok((&builtins::NULL).into())
        },
        Any(_) => {
            let type_name = generate_type_for_schema(open_api, &id_gen(), &schema, types)?;
            Ok(type_name.into())
        }
    }
}

fn id_to_typename(id: &str) -> TypeName {
    use convert_case::{Case, Casing};

    TypeName {
        namespace: "_global".into(),
        name: id.to_case(Case::UpperCamel),
    }
}

fn ref_to_typename(ref_id: &str) -> TypeName {
    let id = ref_id.trim_start_matches("#/components/schemas/");
    id_to_typename(id)
}
