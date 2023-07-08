use std::collections::HashMap;
use anyhow::{anyhow, bail};
use indexmap::indexmap;

use openapiv3::{ExternalDocumentation, MediaType, Parameter, ParameterData, ParameterSchemaOrContent, PathItem, Paths, PathStyle, QueryStyle, ReferenceOr, RequestBody, Response, Responses, StatusCode};
use regex::Regex;

use clients_schema::Property;
use crate::components::TypesAndComponents;

/// Add an endpoint to the OpenAPI schema. This will result in the addition of a number of elements to the
/// openapi schema's `paths` and `components` sections.
///
pub fn add_endpoint(endpoint: &clients_schema::Endpoint, tac: &mut TypesAndComponents, out: &mut Paths) -> anyhow::Result<()> {

    if endpoint.request.is_none() || endpoint.response.is_none() {
        tracing::warn!("Endpoint {} is missing either request or response", &endpoint.name);
        return Ok(());
    }

    // Will we produce multiple paths? If true, we will register components for reuse across paths
    let is_multipath = endpoint.urls.len() > 1 || endpoint.urls.iter().find(|u| u.methods.len() > 1).is_some();

    let request = tac.types.get_request(endpoint.request.as_ref().unwrap())?;

    fn parameter_data(prop: &Property, tac: &mut TypesAndComponents) -> anyhow::Result<ParameterData> {
        Ok(ParameterData {
            name: prop.name.clone(),
            description: prop.description.clone(),
            required: prop.required,
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
            parameter_data: parameter_data(prop, tac)?,
            // Simple (the default) maps array to comma-separated values, which is ES behavior
            // See https://www.rfc-editor.org/rfc/rfc6570#section-3.2.2
            style: PathStyle::Simple,
        };

        // Reuse reference if multiple paths, and inline otherwise
        path_params.insert(prop.name.clone(), if is_multipath {
            tac.add_parameter(&endpoint.name, parameter)
        } else {
            ReferenceOr::Item(parameter)
        });
    };

    //----- Prepare query parameters

    let mut query_params = Vec::new();
    for prop in request.query.iter() {
        let parameter = Parameter::Query {
            parameter_data: parameter_data(prop, tac)?,
            allow_reserved: false,
            style: QueryStyle::Form,
            allow_empty_value: None,
        };

        query_params.push(if is_multipath {
            tac.add_parameter(&endpoint.name, parameter)
        } else {
            ReferenceOr::Item(parameter)
        });
    };

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
            content: indexmap!{ "application/json".to_string() => media },
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
    let response_def = tac.types.get_resppnse(endpoint.response.as_ref().unwrap())?;
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
            let parameter = path_params.get(path_variable)
                .ok_or_else(|| anyhow!("Missing path parameter definition {} for endpoint {}",
                    path_variable, &endpoint.name)
                )?;
            parameters.push(parameter.clone());
        }

        parameters.append(&mut query_params.clone());

        // Create the operation, it will be repeated if we have several methods
        let operation = openapiv3::Operation {
            tags: vec![],
            summary: None,
            description: Some(endpoint.description.clone()),
            external_docs: endpoint.doc_url.as_ref().map(|url| ExternalDocumentation {
                description: None,
                url: url.clone(),
                extensions: Default::default(),
            }),
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
            extensions: Default::default(), // FIXME: translate availability?
        };

        let mut path = PathItem {
            summary: None,
            description: None,
            get: None,
            put: None,
            post: None,
            delete: None,
            options: None,
            head: None,
            patch: None,
            trace: None,
            servers: vec![],
            parameters: vec![],
            extensions: Default::default(),
        };

        let mut clone_operation = || {
            let mut clone = operation.clone();
            clone.operation_id = Some(format!("{}#{}", endpoint.name, operation_counter));
            operation_counter += 1;
            Some(clone)
        };

        for method in &url_template.methods {
            match method.as_str() {
                "HEAD" => path.get = clone_operation(),
                "GET" => path.get = clone_operation(),
                "POST" => path.post = clone_operation(),
                "PUT" => path.put = clone_operation(),
                "DELETE" => path.put = clone_operation(),
                _ => bail!("Unsupported method: {}", method),
            }
        }

        let mut operation_path = url_template.path.clone();

        // Add query parameter names to the path template
        // See https://www.rfc-editor.org/rfc/rfc6570#section-3.2.8
        if !&request.query.is_empty() {
            let params = &request.query.iter().map(|p| p.name.as_str()).collect::<Vec<_>>().join(",");
            operation_path = format!("{operation_path}{{?{params}}}");
        }

        out.paths.insert(operation_path, ReferenceOr::Item(path));
    }

    Ok(())
}

fn get_path_parameters (template: &str) -> Vec<&str> {
    let regex = Regex::new(r"\{([^}]*)\}").unwrap();
    regex
        .find_iter(template)
        .map(|m| &template[m.start()+1 .. m.end()-1])
        .collect()
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_path_parameters() {
        assert_eq!(get_path_parameters("/{index}/{id}"), vec!{"index", "id"})
    }
}
