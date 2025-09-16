use anyhow::Result;
use clients_schema::{
    Body as SchemaBody, Endpoint as SchemaEndpoint, Flavor, IndexedModel, InstanceOf, Property, TypeDefinition,
    TypeName, UnionOf, UrlTemplate, ValueOf, Visibility,
};
use indexmap::IndexMap;
use std::collections::HashMap;
use std::fs::File;
use std::io::BufWriter;
use std::path::Path as StdPath;

pub mod spec;

pub use spec::*;

/// Convert a clients_schema IndexedModel to individual rest-api-spec files
pub fn convert_schema_to_individual_files(model: IndexedModel, output_dir: &str) -> Result<()> {
    // Expand generics in the model first
    let expanded_model =
        clients_schema::transform::expand_generics(model, clients_schema::transform::ExpandConfig::default())?;

    for endpoint in expanded_model.endpoints {
        let converted_endpoint = convert_endpoint(&endpoint, &expanded_model.types)?;

        // Wrap the JSON content with the API name
        let wrapped_content = HashMap::from([(endpoint.name.clone(), converted_endpoint)]);

        // Create filename from endpoint name
        let filename = format!("{}.json", endpoint.name);
        let file_path = StdPath::new(output_dir).join(&filename);

        // Write individual endpoint file
        let output_file = File::create(&file_path)?;
        let writer = BufWriter::new(output_file);
        serde_json::to_writer_pretty(writer, &wrapped_content)?;

        tracing::debug!("Wrote {} to {}", endpoint.name, file_path.display());
    }

    Ok(())
}

/// Convert a single endpoint from clients_schema to rest-api-spec format
fn convert_endpoint(endpoint: &SchemaEndpoint, types: &IndexMap<TypeName, TypeDefinition>) -> Result<Endpoint> {
    // Extract documentation
    let documentation = Documentation {
        url: endpoint.doc_url.clone().unwrap_or_default(),
        description: if endpoint.description.is_empty() {
            None
        } else {
            Some(endpoint.description.clone())
        },
    };

    // Convert stability information
    let stability = extract_stability_from_availabilities(&endpoint.availability);

    // Convert visibility information
    let visibility = extract_visibility_from_availabilities(&endpoint.availability);

    // Convert URL patterns
    let paths = endpoint
        .urls
        .iter()
        .map(|url_template| convert_url_template(url_template, endpoint, types))
        .collect::<Result<Vec<_>>>()?;

    let url = Url { paths };

    // Extract parameters from the request type
    let mut params = IndexMap::new();
    let mut body = None;

    if let Some(request_type_name) = &endpoint.request {
        if let Some(TypeDefinition::Request(request)) = types.get(request_type_name) {
            // Convert query parameters
            for param in &request.query {
                let converted_param = convert_parameter(param, types)?;
                params.insert(param.name.clone(), converted_param);
            }

            // Add parameters from attached behaviors
            for behavior_name in &request.attached_behaviors {
                if behavior_name != "CommonQueryParameters" {
                    // handled in _common.json
                    add_behavior_parameters(&mut params, behavior_name, types)?;
                }
            }

            // Convert body if present
            if !matches!(request.body, SchemaBody::NoBody(_)) {
                body = Some(Body {
                    description: "Request body".to_string(),
                    required: endpoint.request_body_required,
                });
            }
        }
    }

    // Convert deprecation information
    let deprecated = endpoint.deprecation.as_ref().map(|dep| Deprecation {
        version: dep.version.clone(),
        description: dep.description.clone(),
    });

    // Convert headers from request_media_type and response_media_type
    let headers = if !endpoint.request_media_type.is_empty() || !endpoint.response_media_type.is_empty() {
        Some(Headers {
            accept: endpoint.response_media_type.clone(),
            content_type: endpoint.request_media_type.clone(),
        })
    } else {
        None
    };

    Ok(Endpoint {
        documentation,
        stability,
        visibility,
        headers,
        url,
        params,
        body,
        deprecated,
    })
}

/// Convert a URL template to a Path
fn convert_url_template(
    url_template: &UrlTemplate,
    endpoint: &SchemaEndpoint,
    types: &IndexMap<TypeName, TypeDefinition>,
) -> Result<Path> {
    let mut parts = HashMap::new();

    // Extract path parameters from the request type, but only include those referenced in this URL template
    if let Some(request_type_name) = &endpoint.request {
        if let Some(TypeDefinition::Request(request)) = types.get(request_type_name) {
            for path_param in &request.path {
                // Only include this path parameter if it's referenced in this specific URL template
                let param_pattern = format!("{{{}}}", path_param.name);
                if url_template.path.contains(&param_pattern) {
                    let part = PathPart {
                        typ: get_type_name(&path_param.typ, types).to_string(),
                        description: path_param.description.clone().unwrap_or_default(),
                        deprecated: path_param.deprecation.as_ref().map(|dep| Deprecation {
                            version: dep.version.clone(),
                            description: dep.description.clone(),
                        }),
                    };
                    parts.insert(path_param.name.clone(), part);
                }
            }
        }
    }

    Ok(Path {
        path: url_template.path.clone(),
        methods: url_template.methods.clone(),
        parts,
    })
}

/// Convert a Property to a Parameter
fn convert_parameter(property: &Property, types: &IndexMap<TypeName, TypeDefinition>) -> Result<Parameter> {
    let typ = get_type_name(&property.typ, types).to_string();
    let mut options = get_enum_options(&property.typ, types);

    let mut default = property.server_default.as_ref().map(|default| match default {
        clients_schema::ServerDefault::String(s) => serde_json::Value::String(s.clone()),
        clients_schema::ServerDefault::Number(n) => serde_json::Value::from(*n as i64),
        clients_schema::ServerDefault::Boolean(b) => serde_json::Value::Bool(*b),
        clients_schema::ServerDefault::StringArray(arr) => {
            serde_json::Value::Array(arr.iter().map(|s| serde_json::Value::String(s.clone())).collect())
        }
        clients_schema::ServerDefault::NumberArray(arr) => {
            serde_json::Value::Array(arr.iter().map(|s| serde_json::Value::String(s.clone())).collect())
        }
    });

    // Hardcode expand_wildcards parameter
    if property.name == "expand_wildcards" {
        options = vec![
            "open".to_string(),
            "closed".to_string(),
            "hidden".to_string(),
            "none".to_string(),
            "all".to_string(),
        ];
        default = Some(serde_json::Value::String("all".to_string()));
    }

    let deprecated = property.deprecation.as_ref().map(|dep| Deprecation {
        version: dep.version.clone(),
        description: dep.description.clone(),
    });

    Ok(Parameter {
        typ,
        description: property.description.clone().unwrap_or_default(),
        options,
        default,
        deprecated,
    })
}

// rest-api-spec types:
// list|date|time|string|enum|int|double|long|boolean|number

const BUILTIN_MAPPINGS: &[((&str, &str), &str)] = &[
    (("_builtins", "string"), "string"),
    (("_builtins", "boolean"), "boolean"),
    (("_builtins", "number"), "number"),
    (("_types", "integer"), "int"),
    (("_types", "long"), "long"),
    (("_types", "float"), "number"),
    (("_types", "double"), "double"),
    (("_types", "time"), "time"),
    (("_types", "Duration"), "time"),
    // special cases
    (("_types", "ExpandWildcards"), "enum"),
    (("_types", "DateTime"), "time"),
    (("_types", "WaitForActiveShards"), "string"),
    // sometimes list in rest-api-spec as comma-separate values are allowed
    // but the Elasticsearch specification always models it as a string.
    (("_types", "Routing"), "list"),
    (("_global.search._types", "SourceConfigParam"), "list"),
    (("_global.search._types", "TrackHits"), "boolean|long"),
];

fn is_list_enum(union: &UnionOf) -> bool {
    // if union of X and X[]
    if union.items.len() == 2 {
        // check if first item is InstanceOf and second is ArrayOf
        if let ValueOf::InstanceOf(instance) = &union.items[0] {
            if let ValueOf::ArrayOf(array) = &union.items[1] {
                let array_instance = match &*array.value {
                    ValueOf::InstanceOf(inst) => inst,
                    _ => panic!("Expected InstanceOf inside ArrayOf in union type"),
                };
                if instance.typ.name == array_instance.typ.name {
                    return true;
                }
            }
        }
    }
    return false;
}

fn is_literal(instance: &InstanceOf) -> Option<String> {
    let key = (instance.typ.namespace.as_str(), instance.typ.name.as_str());
    if let Some(&mapped_type) = BUILTIN_MAPPINGS.iter().find(|&&(k, _)| k == key).map(|(_, v)| v) {
        return Some(mapped_type.to_string());
    } else {
        return None;
    }
}

/// Convert a ValueOf type to a simple string representation
fn get_type_name(value_of: &ValueOf, types: &IndexMap<TypeName, TypeDefinition>) -> String {
    match value_of {
        ValueOf::ArrayOf(_) => "list".to_string(),
        ValueOf::UnionOf(union) => if is_list_enum(union) { "enum" } else { todo!() }.to_string(),
        ValueOf::LiteralValue(_) => "string".to_string(),
        ValueOf::InstanceOf(instance) => {
            let type_name = &instance.typ;
            let key = (type_name.namespace.as_str(), type_name.name.as_str());

            if let Some(&mapped_type) = BUILTIN_MAPPINGS.iter().find(|&&(k, _)| k == key).map(|(_, v)| v) {
                mapped_type.to_string()
            } else if let Some(TypeDefinition::Enum(_)) = types.get(type_name) {
                "enum".to_string()
            } else {
                let full_type = types.get(type_name).unwrap();

                match full_type {
                    TypeDefinition::TypeAlias(ref alias) => match &alias.typ {
                        ValueOf::UnionOf(ref union) => {
                            if is_list_enum(union) {
                                return "list".to_string();
                            }
                        }
                        ValueOf::InstanceOf(instance) => {
                            if let Some(literal) = is_literal(&instance) {
                                return literal;
                            }
                        }
                        _ => todo!(),
                    },
                    _ => panic!("Expected TypeAlias but got {:?}", full_type),
                }
                return "???".to_string();
            }
        }
        _ => todo!(),
    }
}

/// Extract enum options from a ValueOf type
fn get_enum_options(value_of: &ValueOf, types: &IndexMap<TypeName, TypeDefinition>) -> Vec<String> {
    match value_of {
        ValueOf::InstanceOf(instance) => {
            if let Some(TypeDefinition::Enum(enum_def)) = types.get(&instance.typ) {
                enum_def.members.iter().map(|member| member.name.clone()).collect()
            } else {
                vec![]
            }
        }
        ValueOf::UnionOf(union) => {
            // For union types, collect all literal values as options
            union
                .items
                .iter()
                .filter_map(|item| match item {
                    ValueOf::LiteralValue(literal) => Some(literal.value.to_string()),
                    _ => None,
                })
                .collect()
        }
        _ => vec![],
    }
}

/// Add parameters from an attached behavior to the parameters map
fn add_behavior_parameters(
    params: &mut IndexMap<String, Parameter>,
    behavior_name: &str,
    types: &IndexMap<TypeName, TypeDefinition>,
) -> Result<()> {
    // Look for the behavior in the _spec_utils namespace
    let behavior_type_name = TypeName::new("_spec_utils", behavior_name);

    if let Some(TypeDefinition::Interface(interface)) = types.get(&behavior_type_name) {
        // Add each property from the behavior as a query parameter
        for property in &interface.properties {
            let converted_param = convert_parameter(property, types)?;
            params.insert(property.name.clone(), converted_param);
        }
    }

    Ok(())
}

/// Extract visibility information from availabilities
/// Defaults to "public" if no specific visibility is set
fn extract_visibility_from_availabilities(availabilities: &Option<clients_schema::Availabilities>) -> Option<String> {
    let flavor = Flavor::Stack;
    if let Some(visibility) = flavor.visibility(availabilities) {
        return Some(match visibility {
            Visibility::Public => "public".to_string(),
            Visibility::FeatureFlag => "feature_flag".to_string(),
            Visibility::Private => "private".to_string(),
        });
    }

    // No availability restrictions means public
    Some("public".to_string())
}

/// Extract stability information from availabilities
/// Uses stack flavor stability, defaults to "stable" if not specified
fn extract_stability_from_availabilities(availabilities: &Option<clients_schema::Availabilities>) -> Option<String> {
    if let Some(avails) = availabilities {
        if let Some(stack_availability) = avails.get(&Flavor::Stack) {
            if let Some(ref stability) = stack_availability.stability {
                return Some(match stability {
                    clients_schema::Stability::Stable => "stable".to_string(),
                    clients_schema::Stability::Beta => "beta".to_string(),
                    clients_schema::Stability::Experimental => "experimental".to_string(),
                });
            }
        }
    }
    // Default to stable if no stability is explicitly set
    Some("stable".to_string())
}

#[cfg(test)]
mod tests {
    use super::*;
    use clients_schema::*;

    #[test]
    fn test_get_type_name_builtin_types() {
        let types = IndexMap::new();

        // Test string type
        let string_type = ValueOf::InstanceOf(InstanceOf {
            typ: TypeName {
                namespace: "_builtins".into(),
                name: "string".into(),
            },
            generics: vec![],
        });
        assert_eq!(get_type_name(&string_type, &types), "string");

        // Test array type
        let array_type = ValueOf::ArrayOf(ArrayOf {
            value: Box::new(string_type),
        });
        assert_eq!(get_type_name(&array_type, &types), "list");
    }

    #[test]
    fn test_body_struct_has_required_field() {
        use crate::spec::Body;

        // Simple test to verify Body struct has required field
        let body = Body {
            description: "Test body".to_string(),
            required: true,
        };

        assert_eq!(body.description, "Test body");
        assert_eq!(body.required, true);

        let body_optional = Body {
            description: "Optional body".to_string(),
            required: false,
        };

        assert_eq!(body_optional.required, false);
    }

    #[test]
    fn test_convert_url_template_only_includes_referenced_path_parts() {
        use clients_schema::{Body as SchemaBody, NoBody, Request};
        use indexmap::IndexMap;

        // Create test data
        let mut types = IndexMap::new();
        let request_name = TypeName::new("test", "TestRequest");

        let path_params = vec![
            Property {
                name: "index".to_string(),
                typ: ValueOf::InstanceOf(InstanceOf {
                    typ: TypeName::new("_builtins", "string"),
                    generics: vec![],
                }),
                description: Some("Index name".to_string()),
                required: true,
                deprecation: None,
                availability: None,
                server_default: None,
                doc_url: None,
                doc_id: None,
                ext_doc_url: None,
                ext_doc_description: None,
                ext_previous_version_doc_url: None,
                ext_doc_id: None,
                codegen_name: None,
                aliases: vec![],
                container_property: false,
                es_quirk: None,
            },
            Property {
                name: "id".to_string(),
                typ: ValueOf::InstanceOf(InstanceOf {
                    typ: TypeName::new("_builtins", "string"),
                    generics: vec![],
                }),
                description: Some("Document ID".to_string()),
                required: true,
                deprecation: None,
                availability: None,
                server_default: None,
                doc_url: None,
                doc_id: None,
                ext_doc_url: None,
                ext_doc_description: None,
                ext_previous_version_doc_url: None,
                ext_doc_id: None,
                codegen_name: None,
                aliases: vec![],
                container_property: false,
                es_quirk: None,
            },
        ];

        let base: BaseType = BaseType::new(TypeName::new("_builtins", "string"));

        let request = Request {
            base: base,
            path: path_params,
            query: vec![],
            body: SchemaBody::NoBody(NoBody {}),
            generics: vec![],
            inherits: None,
            implements: vec![],
            behaviors: vec![],
            attached_behaviors: vec![],
            examples: None,
        };

        types.insert(request_name.clone(), TypeDefinition::Request(request));

        let endpoint = SchemaEndpoint {
            name: "test_endpoint".to_string(),
            request: Some(request_name),
            response: None,
            urls: vec![],
            doc_url: None,
            description: "".to_string(),
            request_body_required: false,
            request_media_type: vec![],
            response_media_type: vec![],
            availability: None,
            deprecation: None,
            doc_id: None,
            ext_doc_id: None,
            ext_doc_url: None,
            ext_doc_description: None,
            ext_previous_version_doc_url: None,
            doc_tag: None,
            privileges: None,
        };

        // Test URL with index parameter only
        let url_template_with_index = UrlTemplate {
            path: "/{index}/_async_search".to_string(),
            methods: vec!["POST".to_string()],
            deprecation: None,
        };

        let path_with_index = convert_url_template(&url_template_with_index, &endpoint, &types).unwrap();
        assert_eq!(path_with_index.parts.len(), 1);
        assert!(path_with_index.parts.contains_key("index"));
        assert!(!path_with_index.parts.contains_key("id"));

        // Test URL with id parameter only
        let url_template_with_id = UrlTemplate {
            path: "/_async_search/{id}".to_string(),
            methods: vec!["GET".to_string()],
            deprecation: None,
        };

        let path_with_id = convert_url_template(&url_template_with_id, &endpoint, &types).unwrap();
        assert_eq!(path_with_id.parts.len(), 1);
        assert!(path_with_id.parts.contains_key("id"));
        assert!(!path_with_id.parts.contains_key("index"));

        // Test URL with no parameters
        let url_template_no_params = UrlTemplate {
            path: "/_async_search".to_string(),
            methods: vec!["POST".to_string()],
            deprecation: None,
        };

        let path_no_params = convert_url_template(&url_template_no_params, &endpoint, &types).unwrap();
        assert_eq!(path_no_params.parts.len(), 0);
    }
}
