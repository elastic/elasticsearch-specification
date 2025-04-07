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

use clients_schema::{
    builtins, BaseType, Body, Endpoint, InstanceOf, NoBody, Property, Request, TypeDefinition, TypeName, UrlTemplate,
    ValueOf,
};
use openapiv3::{ReferenceOr, StatusCode};

use crate::types::{self, Types};
use tracing::info;

pub fn generate_endpoint(
    id: &str,
    path: &openapiv3::ReferenceOr<openapiv3::PathItem>,
    types: &mut Types,
) -> anyhow::Result<Endpoint> {
    info!("Generating endpoint for {id}");
    match path {
        ReferenceOr::Item(path_item) => {
            if let Some(operation) = &path_item.get {
                generate_get_endpoint(id, &operation, types)
            } else {
                Err(anyhow::anyhow!("No get operation found for endpoint {}", id))
            }
        }
        _ => Err(anyhow::anyhow!("No description found for endpoint {}", id)),
    }
}

fn generate_get_endpoint(id: &str, operation: &openapiv3::Operation, types: &mut Types) -> anyhow::Result<Endpoint> {
    use convert_case::{Case, Casing};

    let default_name = operation.operation_id.as_deref().unwrap_or_default();
    let name = format!("_global.{}", default_name.to_case(Case::Snake));
    let description = operation.summary.as_deref().unwrap_or_default().to_string();

    let response = generate_get_response(&operation);
    let response_media_type = if response.is_some() {
        vec!["application/json".to_string()]
    } else {
        vec![]
    };
    let request = generate_get_request(&operation, types)?;
    let urls = vec![UrlTemplate {
        path: id.to_string(),
        methods: vec!["GET".to_string()],
        deprecation: None,
    }];

    Ok(Endpoint {
        name,
        description,
        doc_url: None,
        doc_id: None,
        ext_doc_id: None,
        ext_doc_url: None,
        deprecation: None,
        availability: None,
        doc_tag: None,
        request: Some(request),
        request_body_required: false,
        response,
        urls,
        request_media_type: vec![],
        response_media_type,
        privileges: None,
    })
}

fn generate_get_response(operation: &openapiv3::Operation) -> Option<TypeName> {
    let openapi_response: &ReferenceOr<openapiv3::Response> =
        operation.responses.responses.get(&StatusCode::Code(200))?;
    let response_typename = match openapi_response {
        ReferenceOr::Reference { reference } => types::ref_to_typename(reference),
        ReferenceOr::Item(response) => match response.content.values().next()?.schema.as_ref()? {
            ReferenceOr::Reference { reference } => types::ref_to_typename(reference),
            ReferenceOr::Item(schema) => panic!("complex schema not expected {:?}", schema.schema_kind),
        },
    };
    Some(response_typename)
}

fn generate_get_request(operation: &openapiv3::Operation, types: &mut Types) -> anyhow::Result<TypeName> {
    let mut query = vec![];
    for parameter in &operation.parameters {
        match parameter {
            ReferenceOr::Reference { .. } => panic!("expected parameter to be inlined"),
            ReferenceOr::Item(parameter) => {
                match &parameter {
                    openapiv3::Parameter::Query { parameter_data, .. } => {
                        let type_ = match &parameter_data.format {
                            openapiv3::ParameterSchemaOrContent::Schema(ref_or_schema) => match ref_or_schema {
                                ReferenceOr::Item(item) => match &item.schema_kind {
                                    openapiv3::SchemaKind::Type(type_) => convert_builtin_type(type_)?,
                                    _ => return Err(anyhow::anyhow!("unexpected schema kind")),
                                },
                                ReferenceOr::Reference { reference } => {
                                    return Err(anyhow::anyhow!("unexpected ReferenceOr::Reference({})", reference))
                                }
                            },
                            openapiv3::ParameterSchemaOrContent::Content(content) => {
                                return Err(anyhow::anyhow!("unexpected Content({:?})", content))
                            }
                        };

                        query.push(Property {
                            name: parameter_data.name.clone(),
                            typ: ValueOf::InstanceOf(InstanceOf::new(type_)),
                            description: parameter_data.description.clone(),
                            required: parameter_data.required,
                            doc_url: None,
                            doc_id: None,
                            ext_doc_url: None,
                            ext_doc_id: None,
                            server_default: None,
                            deprecation: None,
                            availability: None,
                            codegen_name: None,
                            aliases: vec![],
                            container_property: false,
                            es_quirk: None,
                        });
                    }
                    _ => (),
                };
            }
        }
    }
    let request = Request {
        base: BaseType {
            name: TypeName {
                namespace: "_global".into(),
                name: "SystemStatusRequest".into(),
            },
            description: None,
            doc_url: None,
            doc_id: None,
            ext_doc_url: None,
            ext_doc_id: None,
            deprecation: None,
            es_quirk: None,
            variant_name: None,
            codegen_names: vec![],
            spec_location: None,
        },
        generics: vec![],
        inherits: None,
        implements: vec![],
        path: vec![],
        query,
        body: Body::NoBody(NoBody {}),
        behaviors: vec![],
        attached_behaviors: vec![],
    };
    types.add("SystemStatusRequest", TypeDefinition::Request(request.clone()));
    Ok(request.base.name.clone())
}

fn convert_builtin_type(type_: &openapiv3::Type) -> anyhow::Result<TypeName> {
    Ok(match type_ {
        openapiv3::Type::Boolean(_) => builtins::BOOLEAN.clone(),
        openapiv3::Type::Integer(_) => builtins::INTEGER.clone(),
        openapiv3::Type::Number(variant) => match &variant.format {
            openapiv3::VariantOrUnknownOrEmpty::Item(number_type) => match number_type {
                openapiv3::NumberFormat::Float => builtins::FLOAT.clone(),
                openapiv3::NumberFormat::Double => builtins::DOUBLE.clone(),
            },
            _ => builtins::DOUBLE.clone(),
        },
        _ => return Err(anyhow::anyhow!("unexpected type {:?}", type_)),
    })
}
