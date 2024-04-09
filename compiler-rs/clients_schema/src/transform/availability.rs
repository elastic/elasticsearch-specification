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

use crate::transform::Worksheet;
use crate::{Availabilities, Body, IndexedModel, Inherits, Property, TypeDefinition, TypeName, ValueOf};

pub struct Availability {
    #[allow(clippy::type_complexity)]
    avail_filter: Box<dyn Fn(&Option<Availabilities>) -> bool>,
    // Note: we could have avoided the use of interior mutability by adding
    // a `&mut Worksheet` parameter to all methods.
    worksheet: RefCell<Worksheet>,
}

impl Availability {
    pub fn filter(
        mut model: IndexedModel,
        avail_filter: fn(&Option<Availabilities>) -> bool,
    ) -> anyhow::Result<IndexedModel> {
        let filter = Availability {
            avail_filter: Box::new(avail_filter),
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

            TypeDefinition::TypeAlias(ref alias) => {
                self.filter_value_of(&alias.typ);
                alias.generics.iter().for_each(|g| self.filter_type(g));
            }

            TypeDefinition::Request(ref mut request) => {
                request.inherits.iter().for_each(|i| self.filter_inherits(i));
                request.behaviors.iter().for_each(|i| self.filter_behaviors(i));
                self.filter_properties(&mut request.path);
                self.filter_properties(&mut request.query);
                self.filter_body(&mut request.body);
            }

            TypeDefinition::Response(ref mut response) => {
                response.behaviors.iter().for_each(|i| self.filter_behaviors(i));
                self.filter_body(&mut response.body);
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
}
