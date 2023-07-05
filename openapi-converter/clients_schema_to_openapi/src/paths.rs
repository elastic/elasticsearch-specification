use std::collections::{HashMap, HashSet};
use anyhow::{anyhow, bail};
use indexmap::IndexMap;
use openapiv3::{ExternalDocumentation, Parameter, ParameterData, ParameterSchemaOrContent, PathItem, PathStyle, QueryStyle, ReferenceOr, Schema};
use regex::Regex;

use clients_schema::{Property, TypeDefinition, TypeName, TypeRegistry, ValueOf};
use crate::schemas;


pub fn build_paths(endpoints: &Vec<clients_schema::Endpoint>, types: &TypeRegistry)
                   -> anyhow::Result<IndexMap<String, ReferenceOr<PathItem>>> {
    let mut paths = IndexMap::new();

    for endpoint in endpoints {
        if endpoint.request.is_none() || endpoint.response.is_none() {
            tracing::warn!("Endpoint {} is missing either request or response", &endpoint.name);
            continue;
        }

        let request = types.get_request(endpoint.request.as_ref().unwrap())?;

        fn find_property<'a>(name: &str, props: &'a Vec<Property>) -> anyhow::Result<&'a Property> {
            props.iter()
                .find(|p| p.name == name)
                .ok_or_else(|| anyhow!("Property {} not found in request ", name))
        }

        fn parameter_data(prop: &Property) -> anyhow::Result<ParameterData> {
            Ok(ParameterData {
                name: prop.name.clone(),
                description: prop.description.clone(),
                required: prop.required,
                deprecated: Some(prop.deprecation.is_some()),
                format: ParameterSchemaOrContent::Schema(schemas::for_value_of(&prop.typ)?),
                example: None,
                examples: Default::default(),
                explode: None, // Defaults to simple, i.e. comma-separated values for arrays
                extensions: Default::default(),
            })
        }

        for url_template in &endpoint.urls {

            //----- Path and query parameters

            let mut parameters = Vec::new();
            let mut operation_path = url_template.path.clone();

            // Path parameters

            for path_variable in get_path_parameters(&operation_path) {
                let parameter = Parameter::Path {
                    parameter_data: parameter_data(find_property(path_variable, &request.path)?)?,
                    // Simple (the default) maps array to comma-separated values, which is ES behavior
                    // See https://www.rfc-editor.org/rfc/rfc6570#section-3.2.2
                    style: PathStyle::Simple,
                };

                parameters.push(ReferenceOr::Item(parameter));
            }

            // Query parameters

            for query_prop in &request.query {
                let parameter = Parameter::Query {
                    parameter_data: parameter_data(query_prop)?,
                    allow_reserved: false,
                    style: QueryStyle::Form,
                    allow_empty_value: None,
                };

                parameters.push(ReferenceOr::Item(parameter));
            }

            // Add query parameter names to the path template
            // See https://www.rfc-editor.org/rfc/rfc6570#section-3.2.8
            if !&request.query.is_empty() {
                let params = &request.query.iter().map(|p| p.name.as_str()).collect::<Vec<_>>().join(",");
                operation_path = format!("{operation_path}{{?{params}}}");
            }

            // Create the operation, it will be repeated if we have several methods
            // LATER: we could also register the operation as a component and reference it several times
            let operation = openapiv3::Operation {
                tags: vec![],
                summary: None,
                description: Some(endpoint.description.clone()),
                external_docs: endpoint.doc_url.as_ref().map(|url| ExternalDocumentation {
                    description: None,
                    url: url.clone(),
                    extensions: Default::default(),
                }),
                operation_id: None,
                parameters: parameters,
                request_body: None, // TODO
                responses: Default::default(), // TODO
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

            for method in &url_template.methods {
                match method.as_str() {
                    "HEAD" => path.get = Some(operation.clone()),
                    "GET" => path.get = Some(operation.clone()),
                    "POST" => path.post = Some(operation.clone()),
                    "PUT" => path.put = Some(operation.clone()),
                    "DELETE" => path.put = Some(operation.clone()),
                    _ => bail!("Unsupported method: {}", method),
                }
            }

            paths.insert(operation_path, ReferenceOr::Item(path));
        }
    }

    Ok(paths)
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
