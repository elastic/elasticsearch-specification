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

use openapiv3::{Components, Parameter, ReferenceOr, RequestBody, Response, Schema, StatusCode};
use clients_schema::TypeName;
use crate::utils::SchemaName;

pub struct TypesAndComponents<'a> {
    pub model: &'a clients_schema::IndexedModel,
    pub components: &'a mut Components,
}

impl <'a> TypesAndComponents<'a> {
    pub fn new(model: &'a clients_schema::IndexedModel, components: &'a mut Components) -> TypesAndComponents<'a> {
        TypesAndComponents {
            model,
            components,
        }
    }

    pub fn add_request_body(&mut self, endpoint: &str, body: RequestBody,) -> ReferenceOr<RequestBody> {
        self.components.request_bodies.insert(endpoint.to_string(), ReferenceOr::Item(body));
        ReferenceOr::Reference {
            reference: format!("#/components/requestBodies/{}", endpoint)
        }
    }

    pub fn add_parameter(&mut self, endpoint: &str, param: Parameter, duplicate: bool) -> ReferenceOr<Parameter> {
        let suffix = if duplicate {"_"} else {""};
        let result = ReferenceOr::Reference {
            reference: format!("#/components/parameters/{}#{}{}", endpoint, &param.parameter_data_ref().name, suffix)
        };
        self.components.parameters.insert(
            format!("{}#{}{}", endpoint, &param.parameter_data_ref().name, suffix),
            ReferenceOr::Item(param)
        );
        result
    }

    pub fn add_response(&mut self, endpoint: &str, status: StatusCode, response: Response) -> ReferenceOr<Response> {
        self.components.responses.insert(format!("{}#{}", endpoint, status), ReferenceOr::Item(response));
        ReferenceOr::Reference {
            reference: format!("#/components/responses/{}#{}", endpoint, status)
        }
    }

    pub fn add_schema(&mut self, name: &TypeName, schema: ReferenceOr<Schema>) -> ReferenceOr<Schema> {
        self.components.schemas.insert(name.schema_name(), schema);
        name.schema_ref()
    }
}
