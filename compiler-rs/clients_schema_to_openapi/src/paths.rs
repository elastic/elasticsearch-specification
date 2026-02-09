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

use std::collections::HashMap;
use std::fmt::Write;

use anyhow::{anyhow, bail};
use clients_schema::{Privileges, Property};
use indexmap::IndexMap;
use indexmap::indexmap;
use icu_segmenter::SentenceSegmenter;
use itertools::Itertools;
use openapiv3::{
    MediaType, Parameter, ParameterData, ParameterSchemaOrContent, PathItem, PathStyle, Paths, QueryStyle, ReferenceOr,
    RequestBody, Response, Responses, StatusCode, Example
};
use serde_json::Value;
use clients_schema::SchemaExample;
use crate::components::TypesAndComponents;
use crate::convert_availabilities;

/// Add an endpoint to the OpenAPI schema. This will result in the addition of a number of elements to the
/// openapi schema's `paths` and `components` sections.
pub fn add_endpoint(
    endpoint: &clients_schema::Endpoint,
    tac: &mut TypesAndComponents,
    out: &mut Paths,
    product_meta: &IndexMap<String,String>
) -> anyhow::Result<()> {
    if endpoint.request.is_none() {
        // tracing::warn!("Endpoint {} is missing a request -- ignored", &endpoint.name);
        return Ok(());
    }

    if endpoint.response.is_none() {
        // tracing::warn!("Endpoint {} is missing a response -- ignored", &endpoint.name);
        return Ok(());
    }

    // Namespace
    let namespace = match endpoint.name.split_once('.') {
       Some((ns, _)) => ns,
       None => &endpoint.name,
    };

    let request = tac.model.get_request(endpoint.request.as_ref().unwrap())?;

    fn parameter_data(prop: &Property, in_path: bool, tac: &mut TypesAndComponents) -> anyhow::Result<ParameterData> {
        let mut extensions: IndexMap<String,Value> = Default::default();
        convert_availabilities(&prop.availability, &tac.config.flavor, &mut extensions);
        Ok(ParameterData {
            name: prop.name.clone(),
            description: tac.property_description(prop)?,
            required: in_path || prop.required, // Path parameters are always required
            deprecated: Some(prop.deprecation.is_some()),
            format: ParameterSchemaOrContent::Schema(tac.convert_value_of(&prop.typ)?),
            example: None,
            examples: Default::default(),
            explode: None, // Defaults to simple, i.e. comma-separated values for arrays
            extensions,
        })
    }

    //----- Prepare path parameters

    let mut path_params = HashMap::new();
    for prop in request.path.iter() {
        let parameter = Parameter::Path {
            parameter_data: parameter_data(prop, true, tac)?,
            // Simple (the default) maps array to comma-separated values, which is ES behavior
            // See https://www.rfc-editor.org/rfc/rfc6570#section-3.2.2
            style: PathStyle::Simple,
        };

        // Reuse reference if multiple paths, and inline otherwise
        path_params.insert(
            prop.name.clone(),
            ReferenceOr::Item(parameter),
        );
    }

    //----- Prepare query parameters

    let mut query_params = Vec::new();
    for prop in request.query.iter() {
        let parameter = Parameter::Query {
            parameter_data: parameter_data(prop, false, tac)?,
            allow_reserved: false,
            style: QueryStyle::Form,
            allow_empty_value: None,
        };

        query_params.push(ReferenceOr::Item(parameter));
    }

    //---- Prepare request body

    // This function converts the IndexMap<String, SchemaExample> examples of
    // schema.json to IndexMap<String, ReferenceOr<Example>> which is the format
    // that OpenAPI expects.
    fn get_openapi_examples(schema_examples: &IndexMap<String, SchemaExample>) -> IndexMap<String, ReferenceOr<Example>> {
        let mut openapi_examples = indexmap! {};
        for (name, schema_example) in schema_examples {
            let example = match &schema_example.value {
                None => None,
                // Examples should be objects - https://spec.openapis.org/oas/v3.1.1.html#example-object
                // Disabled for now, as some examples use multi-line json as in the Kibana console.
                Some(text) => Some(serde_json::Value::String(text.clone())),
                // Some(text) => {
                //     match serde_json::from_str::<serde_json::Value>(&text) {
                //         Ok(json) => {
                //             Some(json)
                //         }
                //         // Cannot parse json: assume it's text (e.g. cat requests)
                //         // but should be validated by looking at the media-type
                //         Err(err) => {
                //             tracing::warn!("Cannot parse example: {}\n{}", err, text);
                //             Some(serde_json::Value::String(text.clone()))
                //         }
                //     }
                // }
            };

            if example.is_some() {
                let openapi_example = Example {
                    value: example,
                    description: schema_example.description.clone(),
                    summary: schema_example.summary.clone(),
                    external_value: None,
                    extensions: Default::default(),
                };
                openapi_examples.insert(name.clone(), ReferenceOr::Item(openapi_example));
            }
        }
        openapi_examples
    }

    // If this endpoint request has examples in schema.json, convert them to the
    // OpenAPI format and add them to the endpoint request in the OpenAPI document.
    let request_examples = if let Some(examples) = &request.examples {
        get_openapi_examples(examples)
    } else {
        IndexMap::new()
    };

    let request_body = tac.convert_request(request)?.map(|schema| {
        let media = MediaType {
            schema: Some(schema),
            example: None,
            examples: request_examples,
            encoding: Default::default(),
            extensions: Default::default(),
        };


        let body = RequestBody {
            description: None,
            // FIXME: nd-json requests
            content: indexmap! { "application/json".to_string() => media },
            required: endpoint.request_body_required,
            extensions: Default::default(),
        };

        ReferenceOr::Item(body)
    });

    //---- Prepare request responses


    // FIXME: buggy for responses with no body
    // TODO: handle binary responses
    let response_def = tac.model.get_response(endpoint.response.as_ref().unwrap())?;
    // If this endpoint response has examples in schema.json, convert them to the
    // OpenAPI format and add them to the endpoint response in the OpenAPI document.
    let response_examples = if let Some(examples) = &response_def.examples {
        get_openapi_examples(examples)
    } else {
        IndexMap::new()
    };
    let response = Response {
        description: "".to_string(),
        headers: Default::default(),
        content: indexmap! {
            "application/json".to_string() => MediaType {
                schema: tac.convert_response(response_def)?,
                example: None,
                examples: response_examples,
                encoding: Default::default(),
                extensions: Default::default(),
            }
        },
        links: Default::default(),
        extensions: Default::default(),
    };
    let response = ReferenceOr::Item(response);


    let responses = indexmap! {
        StatusCode::Code(200) => response
        // TODO: add error responses
    };

    //---- Build a path for each url + method
    let mut operation_counter = 0;

    for url_template in &endpoint.urls {
        // Path and query parameters

        let mut parameters = Vec::new();

        for path_variable in get_path_parameters(&url_template.path) {
            let parameter = path_params.get(path_variable).ok_or_else(|| {
                anyhow!(
                    "Missing path parameter definition {} for endpoint {}",
                    path_variable,
                    &endpoint.name
                )
            })?;
            parameters.push(parameter.clone());
        }

        parameters.append(&mut query_params.clone());

        let sum_desc = split_summary_desc(&endpoint.description);

        let privilege_desc = add_privileges(&endpoint.privileges);

        let full_desc = match (sum_desc.description, privilege_desc) {
            (Some(a), Some(b)) => Some(a+ &b),
            (opt_a, opt_b) => opt_a.or(opt_b)
        };

        // add the x-state extension for availability
        let mut extensions = crate::availability_as_extensions(&endpoint.availability, &tac.config.flavor);

        if tac.config.include_language_examples {
            // add the x-codeSamples extension
            let mut code_samples = vec![];
            if let Some(examples) = request.examples.clone() {
                if let Some((_, example)) = examples.first() {
                    let request_line = example.method_request.clone().unwrap_or(String::from(""));
                    let request_body = example.value.clone().unwrap_or(String::from(""));
                    if !request_line.is_empty() {
                        code_samples.push(serde_json::json!({
                            "lang": "Console",
                            "source": request_line + "\n" + request_body.as_str(),
                        }));
                    }
                    if let Some(alternatives) = example.alternatives.clone() {
                        for alternative in alternatives.iter() {
                            code_samples.push(serde_json::json!({
                                "lang": alternative.language,
                                "source": alternative.code.as_str(),
                            }));
                        }
                    }
                }
            }
            if !code_samples.is_empty() {
                extensions.insert("x-codeSamples".to_string(), serde_json::json!(code_samples));
            }
        }

        extensions.append(&mut crate::product_meta_as_extensions(namespace, product_meta));

        // Create the operation, it will be repeated if we have several methods
        let operation = openapiv3::Operation {
            tags: if let Some(doc_tag) = &endpoint.doc_tag {
                vec![doc_tag.clone()]
            } else {
                vec![namespace.to_string()]
            },
            summary: sum_desc.summary,
            description: full_desc,
            external_docs: tac.convert_external_docs(endpoint),
            // external_docs: None, // Need values that differ from client purposes
            operation_id: None, // set in clone_operation below with operation_counter
            parameters,
            request_body: request_body.clone(),
            responses: Responses {
                default: None,
                responses: responses.clone(),
                extensions: Default::default(),
            },
            callbacks: Default::default(),
            deprecated: endpoint.deprecation.is_some(),
            security: None,
            servers: vec![],
            extensions
        };


        let mut operation_path = url_template.path.clone();

        // Disabled -- OpenAPI path templates do not contain the query string
        if false {
            // Add query parameter names to the path template
            // See https://www.rfc-editor.org/rfc/rfc6570#section-3.2.8
            if !&request.query.is_empty() {
                let params = &request
                    .query
                    .iter()
                    .map(|p| p.name.as_str())
                    .collect::<Vec<_>>()
                    .join(",");
                operation_path = format!("{operation_path}{{?{params}}}");
            }
        }

        // info!("Adding {} - {}", &endpoint.name, &operation_path);

        // Check if this path has already been encountered with a different http method (possibly in a
        // different endpoint)
        let path = out
            .paths
            .entry(operation_path)
            .or_insert(ReferenceOr::Item(PathItem::default()));

        // A PathItem contains entries for all http methods, and some additional fields
        // that we can't fill as they cross several endpoints. This could be some namespace-level
        // documentation though.
        // PathItem {
        //     summary: None,
        //     description: None,
        //     get: None,
        //     put: None,
        //     post: None,
        //     delete: None,
        //     options: None,
        //     head: None,
        //     patch: None,
        //     trace: None,
        //     servers: vec![],
        //     parameters: vec![],
        //     extensions: Default::default(),
        // };

        let path = match path {
            ReferenceOr::Item(ref mut item) => item,
            _ => bail!("Expecting an item (should not happe)"),
        };

        for method in &url_template.methods {
            let method_field = match method.as_str() {
                "GET" => &mut path.get,
                "PUT" => &mut path.put,
                "POST" => &mut path.post,
                "DELETE" => &mut path.delete,
                "OPTIONS" => &mut path.options,
                "HEAD" => &mut path.head,
                "PATCH" => &mut path.patch,
                "TRACE" => &mut path.trace,
                _ => bail!("Unsupported method: {}", method),
            };

            let operation_id: String = endpoint
                .name
                .chars()
                .map(|x| match x {
                    '_' | '.' => '-',
                    _ => x,
                })
                .collect();
            
            let mut operation = operation.clone();
            let mut operation_id = operation_id.clone();
            if operation_counter != 0 {
                write!(&mut operation_id, "-{}", operation_counter)?;
            }
            operation.operation_id = Some(operation_id);

            operation_counter += 1;
            *method_field = Some(operation);
        }
    }

    Ok(())
}

fn get_path_parameters(template: &str) -> Vec<&str> {
    // Note: could be done with regex, but it adds 1 MB to the resulting WASM module
    let mut result = Vec::new();
    let mut template = template;
    while let Some((_start, end)) = template.split_once('{') {
        if let Some((name, remainder)) = end.split_once('}') {
            result.push(name);
            template = remainder;
        } else {
            break;
        }
    }
    result
}

// Splits the original endpoint description into OpenAPI summary and description, where summary
// is the first sentence of the original description with no trailing `.`, and description contains
// the remaining sentences, if there are any left.
fn split_summary_desc(desc: &str) -> SplitDesc{
    let segmenter = SentenceSegmenter::new();

    let breakpoints: Vec<usize> = segmenter
        .segment_str(desc)
        .collect();

    if breakpoints.len()<2{
        return SplitDesc {
            summary: None,
            description: None
        }
    }
    let first_line = &desc[breakpoints[0]..breakpoints[1]];
    let rest = &desc[breakpoints[1]..breakpoints[breakpoints.len()-1]];

    SplitDesc {
        summary:  Some(String::from(first_line.trim().strip_suffix('.').unwrap_or(first_line))),
        description: if !rest.is_empty() {Some(String::from(rest.trim()))} else {None}
    }
}

fn add_privileges(privileges: &Option<Privileges>) -> Option<String>{
    if let Some(privs) = privileges {
        let mut result = "\n\n## Required authorization\n\n".to_string();
        if !privs.index.is_empty() {
            result += "* Index privileges: ";
            result += &privs.index.iter()
                .map(|a| format!("`{a}`"))
                .join(",");
            result += "\n";
        }
        if !privs.cluster.is_empty() {
            result += "* Cluster privileges: ";
            result += &privs.cluster.iter()
                .map(|a| format!("`{a}`"))
                .join(",");
            result += "\n";
        }
        return Some(result)
    }
    None
}

#[derive(PartialEq,Debug)]
struct SplitDesc {
    summary: Option<String>,
    description: Option<String>
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_path_parameters() {
        assert_eq!(get_path_parameters("/{index}/{id}"), vec! {"index", "id"});
        assert_eq!(get_path_parameters("{index}{id}/"), vec! {"index", "id"});
        assert_eq!(get_path_parameters("/{index}/{id}/"), vec! {"index", "id"});

        // Should normally not happen as we expect the model to be correct. Just make sure we don't crash.
        assert_eq!(get_path_parameters("{index}{id/"), vec! {"index"});
        assert_eq!(get_path_parameters("{index{id}/"), vec! {"index{id"});
    }

    #[test]
    fn test_split_summary_desc() {
        assert_eq!(split_summary_desc("One sentence."),
                   SplitDesc{
                       summary: Some(String::from("One sentence")),
                       description: None
                   });
        assert_eq!(split_summary_desc("This is - still one. sentence: all; together"),
                   SplitDesc{
                       summary: Some(String::from("This is - still one. sentence: all; together")),
                       description: None
                   });
        assert_eq!(split_summary_desc("These are two totally. Separate sentences!"),
                   SplitDesc{
                       summary: Some(String::from("These are two totally")),
                       description: Some(String::from("Separate sentences!"))
                   });
        assert_eq!(split_summary_desc("These -> \n are allowed \n because they're needed \n\n for \n\n\n formatting"),
                   SplitDesc{
                       summary: Some(String::from("These -> \n")),
                       description: Some(String::from("are allowed \n because they're needed \n\n for \n\n\n formatting"))
                   });
        assert_eq!(split_summary_desc(""),
                   SplitDesc{
                       summary: None,
                       description: None
                   });
    }
}
