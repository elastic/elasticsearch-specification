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
use clients_schema::Property;
use indexmap::indexmap;
use icu_segmenter::SentenceSegmenter;
use openapiv3::{
    MediaType, Parameter, ParameterData, ParameterSchemaOrContent, PathItem, PathStyle, Paths, QueryStyle, ReferenceOr,
    RequestBody, Response, Responses, StatusCode,
};

use crate::components::TypesAndComponents;

/// Add an endpoint to the OpenAPI schema. This will result in the addition of a number of elements to the
/// openapi schema's `paths` and `components` sections.
pub fn add_endpoint(
    endpoint: &clients_schema::Endpoint,
    tac: &mut TypesAndComponents,
    out: &mut Paths,
) -> anyhow::Result<()> {
    if endpoint.request.is_none() {
        tracing::warn!("Endpoint {} is missing a request -- ignored", &endpoint.name);
        return Ok(());
    }

    if endpoint.response.is_none() {
        tracing::warn!("Endpoint {} is missing a response -- ignored", &endpoint.name);
        return Ok(());
    }

    // Namespace
    // let namespace = match endpoint.name.split_once('.') {
    //    Some((ns, _)) => ns,
    //    None => "core",
    //};

    // Will we produce multiple paths? If true, we will register components for reuse across paths
    let is_multipath = endpoint.urls.len() > 1 || endpoint.urls.iter().any(|u| u.methods.len() > 1);

    let request = tac.model.get_request(endpoint.request.as_ref().unwrap())?;

    fn parameter_data(prop: &Property, in_path: bool, tac: &mut TypesAndComponents) -> anyhow::Result<ParameterData> {
        Ok(ParameterData {
            name: prop.name.clone(),
            description: prop.description.clone(),
            required: in_path || prop.required, // Path parameters are always required
            deprecated: Some(prop.deprecation.is_some()),
            format: ParameterSchemaOrContent::Schema(tac.convert_value_of(&prop.typ)?),
            example: None,
            examples: Default::default(),
            explode: None, // Defaults to simple, i.e. comma-separated values for arrays
            extensions: Default::default(),
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
            if is_multipath {
                tac.add_parameter(&endpoint.name, parameter, false)
            } else {
                ReferenceOr::Item(parameter)
            },
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

        // Does this also exist as a path parameter? (e.g fields in _cat/fielddata)
        let duplicate = path_params.contains_key(&prop.name);

        query_params.push(if is_multipath {
            tac.add_parameter(&endpoint.name, parameter, duplicate)
        } else {
            ReferenceOr::Item(parameter)
        });
    }

    //---- Prepare request body

    let request_body = tac.convert_request(request)?.map(|schema| {
        let media = MediaType {
            schema: Some(schema),
            example: None,
            examples: Default::default(),
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

        if is_multipath {
            tac.add_request_body(&endpoint.name, body)
        } else {
            ReferenceOr::Item(body)
        }
    });

    //---- Prepare request responses

    // FIXME: buggy for responses with no body
    // TODO: handle binary responses
    let response_def = tac.model.get_response(endpoint.response.as_ref().unwrap())?;
    let response = Response {
        description: "".to_string(),
        headers: Default::default(),
        content: indexmap! {
            "application/json".to_string() => MediaType {
                schema: tac.convert_response(response_def)?,
                example: None,
                examples: Default::default(),
                encoding: Default::default(),
                extensions: Default::default(),
            }
        },
        links: Default::default(),
        extensions: Default::default(),
    };
    let response = if is_multipath {
        tac.add_response(&endpoint.name, StatusCode::Code(200), response)
    } else {
        ReferenceOr::Item(response)
    };

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

        // Create the operation, it will be repeated if we have several methods
        let operation = openapiv3::Operation {
            tags: vec![endpoint.name.clone()],
            summary: sum_desc.summary,
            description: sum_desc.description,
            external_docs: tac.convert_external_docs(endpoint),
            operation_id: None, // set in clone_operation below with operation_counter
            parameters,
            request_body: request_body.clone(),
            responses: Responses {
                default: None,
                responses: responses.clone(),
                extensions: Default::default(),
            },
            deprecated: endpoint.deprecation.is_some(),
            security: None,
            servers: vec![],
            extensions: crate::availability_as_extensions(&endpoint.availability),
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

            let mut operation = operation.clone();
            let mut operation_id: String = endpoint
                .name
                .chars()
                .map(|x| match x {
                    '_' | '.' => '-',
                    _ => x,
                })
                .collect();
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
        .segment_str(&desc)
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
