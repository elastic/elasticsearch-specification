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

use std::cell::RefCell;
use std::collections::{HashMap, HashSet};

use crate::transform::Worksheet;
use crate::{
    Availabilities, Body, IndexedModel, Inherits, Property, SchemaExample, TypeAliasVariants, TypeDefinition, TypeName,
    ValueOf,
};

pub struct Availability {
    #[allow(clippy::type_complexity)]
    avail_filter: Box<dyn Fn(&Option<Availabilities>) -> bool>,
    unavailable_internal_tag_variants: HashMap<TypeName, HashSet<TypeName>>,
    // Note: we could have avoided the use of interior mutability by adding
    // a `&mut Worksheet` parameter to all methods.
    worksheet: RefCell<Worksheet>,
}

impl Availability {
    pub fn filter(
        mut model: IndexedModel,
        avail_filter: fn(&Option<Availabilities>) -> bool,
    ) -> anyhow::Result<IndexedModel> {
        let unavailable_internal_tag_variants = Self::find_unavailable_internal_tag_variants(&model, avail_filter);
        let filter = Availability {
            avail_filter: Box::new(avail_filter),
            unavailable_internal_tag_variants,
            worksheet: Worksheet::default().into(),
        };

        // Remove unavailable endpoints
        model.endpoints.retain(|ns| filter.is_available(&ns.availability));

        // Initialize worksheet with request and response of all retained endpoints
        for endpoint in &model.endpoints {
            for name in [&endpoint.request, &endpoint.response].into_iter().flatten() {
                filter.filter_type(name);
            }
        }

        while let Some(name) = {
            // filter.worksheet.borrow_mut().next() will not drop the borrow?
            let mut ws = filter.worksheet.borrow_mut();
            ws.next()
        } {
            if !name.is_builtin() {
                let typedef = model.get_type_mut(&name)?;
                filter.filter_typedef(typedef);
            }
        }

        // Keep types that we have visited
        let ws = filter.worksheet.borrow();
        model.types.retain(|k, _| ws.was_visited(k));

        Ok(model)
    }

    fn find_unavailable_internal_tag_variants(
        model: &IndexedModel,
        avail_filter: fn(&Option<Availabilities>) -> bool,
    ) -> HashMap<TypeName, HashSet<TypeName>> {
        let mut result = HashMap::new();

        for (alias_name, type_def) in &model.types {
            let TypeDefinition::TypeAlias(alias) = type_def else {
                continue;
            };
            let Some(TypeAliasVariants::InternalTag(tag)) = &alias.variants else {
                continue;
            };
            let ValueOf::UnionOf(union) = &alias.typ else {
                continue;
            };

            for item in &union.items {
                let ValueOf::InstanceOf(instance) = item else {
                    continue;
                };
                let Ok(TypeDefinition::Interface(variant)) = model.get_type(&instance.typ) else {
                    continue;
                };
                let Some(discriminator) = variant.properties.iter().find(|p| p.name == tag.tag) else {
                    continue;
                };

                if !avail_filter(&discriminator.availability) {
                    result
                        .entry(alias_name.clone())
                        .or_insert_with(HashSet::new)
                        .insert(instance.typ.clone());
                }
            }
        }

        result
    }

    fn is_available(&self, availabilities: &Option<Availabilities>) -> bool {
        (self.avail_filter)(availabilities)
    }

    fn filter_type(&self, name: &TypeName) {
        self.worksheet.borrow_mut().add(name);
    }

    fn filter_typedef(&self, typedef: &mut TypeDefinition) {
        match typedef {
            TypeDefinition::Interface(ref mut itf) => {
                itf.inherits.iter().for_each(|i| self.filter_inherits(i));
                itf.behaviors.iter().for_each(|i| self.filter_behaviors(i));
                self.filter_properties(&mut itf.properties);
            }

            TypeDefinition::Enum(ref mut enm) => {
                enm.members.retain(|member| self.is_available(&member.availability));
            }

            TypeDefinition::TypeAlias(ref mut alias) => {
                if let Some(unavailable) = self.unavailable_internal_tag_variants.get(&alias.base.name) {
                    if let ValueOf::UnionOf(ref mut union) = alias.typ {
                        union.items.retain(|item| match item {
                            ValueOf::InstanceOf(instance) => !unavailable.contains(&instance.typ),
                            _ => true,
                        });
                    }
                }
                self.filter_value_of(&alias.typ);
                alias.generics.iter().for_each(|g| self.filter_type(g));
            }

            TypeDefinition::Request(ref mut request) => {
                request.inherits.iter().for_each(|i| self.filter_inherits(i));
                request.behaviors.iter().for_each(|i| self.filter_behaviors(i));
                self.filter_properties(&mut request.path);
                self.filter_properties(&mut request.query);
                self.filter_body(&mut request.body);
                self.filter_examples(&mut request.examples);
            }

            TypeDefinition::Response(ref mut response) => {
                response.behaviors.iter().for_each(|i| self.filter_behaviors(i));
                self.filter_body(&mut response.body);
                self.filter_examples(&mut response.examples);
            }
        }
    }

    fn filter_inherits(&self, inherits: &Inherits) {
        self.filter_type(&inherits.typ);
        self.filter_values_of(&inherits.generics);
    }

    fn filter_behaviors(&self, inherits: &Inherits) {
        // Do not traverse the behavior's type: it's builtin, even if part of the _spec_utils namespace
        self.filter_values_of(&inherits.generics);
    }

    fn filter_properties(&self, props: &mut Vec<Property>) {
        props.retain(|p| self.is_available(&p.availability));
        for prop in props {
            self.filter_value_of(&prop.typ);
        }
    }

    fn filter_values_of(&self, values_of: &Vec<ValueOf>) {
        for value in values_of {
            self.filter_value_of(value);
        }
    }

    fn filter_value_of(&self, value_of: &ValueOf) {
        match value_of {
            ValueOf::InstanceOf(ref inst_of) => {
                self.filter_type(&inst_of.typ);
                self.filter_values_of(&inst_of.generics);
            }

            ValueOf::ArrayOf(ref arr) => {
                self.filter_value_of(arr.value.as_ref());
            }

            ValueOf::UnionOf(ref union) => {
                for item in &union.items {
                    self.filter_value_of(item);
                }
            }

            ValueOf::DictionaryOf(ref dict) => {
                self.filter_value_of(dict.value.as_ref());
                self.filter_value_of(dict.key.as_ref());
            }

            ValueOf::UserDefinedValue(_) => {}
            ValueOf::LiteralValue(_) => {}
        }
    }

    fn filter_body(&self, body: &mut Body) {
        match body {
            Body::Value(ref value) => self.filter_value_of(&value.value),
            Body::Properties(ref mut props) => self.filter_properties(&mut props.properties),
            Body::NoBody(_) => {}
        }
    }

    fn filter_examples(&self, examples: &mut Option<indexmap::IndexMap<String, SchemaExample>>) {
        if let Some(examples) = examples {
            examples.retain(|_, example| self.is_available(&example.availability));
        }
    }
}

#[cfg(test)]
mod tests {
    use crate::{Flavor, TypeDefinition, ValueOf};

    use super::Availability;

    #[test]
    fn removes_internal_tag_variant_when_discriminator_is_unavailable() {
        let schema = r#"
        {
          "endpoints": [{
            "name": "test.endpoint",
            "description": "Test endpoint",
            "requestBodyRequired": false,
            "response": { "name": "Response", "namespace": "test" },
            "urls": []
          }],
          "types": [{
            "kind": "response",
            "name": { "name": "Response", "namespace": "test" },
            "body": {
              "kind": "value",
              "value": {
                "kind": "instance_of",
                "type": { "name": "Variant", "namespace": "test" }
              }
            }
          }, {
            "kind": "type_alias",
            "name": { "name": "Variant", "namespace": "test" },
            "type": {
              "kind": "union_of",
              "items": [{
                "kind": "instance_of",
                "type": { "name": "ServerlessVariant", "namespace": "test" }
              }, {
                "kind": "instance_of",
                "type": { "name": "StackVariant", "namespace": "test" }
              }]
            },
            "variants": { "kind": "internal_tag", "tag": "type" }
          }, {
            "kind": "interface",
            "name": { "name": "ServerlessVariant", "namespace": "test" },
            "properties": [{
              "name": "type",
              "required": true,
              "type": { "kind": "literal_value", "value": "serverless" }
            }]
          }, {
            "kind": "interface",
            "name": { "name": "StackVariant", "namespace": "test" },
            "properties": [{
              "availability": { "stack": {} },
              "name": "type",
              "required": true,
              "type": { "kind": "literal_value", "value": "stack" }
            }]
          }]
        }
        "#;
        let model = crate::IndexedModel::from_reader(schema.as_bytes()).unwrap();

        let filtered = Availability::filter(model, |a| Flavor::Serverless.available(a)).unwrap();

        let alias = filtered
            .types
            .values()
            .find_map(|type_def| match type_def {
                TypeDefinition::TypeAlias(alias) if alias.base.name.name == "Variant" => Some(alias),
                _ => None,
            })
            .unwrap();
        let ValueOf::UnionOf(union) = &alias.typ else {
            panic!("expected a union alias");
        };
        assert_eq!(union.items.len(), 1);
        let ValueOf::InstanceOf(variant) = &union.items[0] else {
            panic!("expected a type reference");
        };
        assert_eq!(variant.typ.name.as_str(), "ServerlessVariant");
        assert!(!filtered.types.keys().any(|name| name.name.as_str() == "StackVariant"));
    }
}
