use anyhow::Result;
use clients_schema::{
    IndexedModel, Endpoint as SchemaEndpoint, TypeDefinition, ValueOf, Property,
    UrlTemplate, TypeName, Body as SchemaBody, Flavor, Visibility
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
    let expanded_model = clients_schema::transform::expand_generics(
        model, 
        clients_schema::transform::ExpandConfig::default()
    )?;
    
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
fn convert_endpoint(
    endpoint: &SchemaEndpoint, 
    types: &IndexMap<TypeName, TypeDefinition>
) -> Result<Endpoint> {
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
    let paths = endpoint.urls.iter()
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
                let converted_param = convert_parameter(param, types, &endpoint.name)?;
                params.insert(param.name.clone(), converted_param);
            }
            
            // Add parameters from attached behaviors
            for behavior_name in &request.attached_behaviors {
                if behavior_name != "CommonQueryParameters" {  // handled in _common.json
                    add_behavior_parameters(&mut params, behavior_name, types, &endpoint.name)?;
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
    types: &IndexMap<TypeName, TypeDefinition>
) -> Result<Path> {
    let mut parts = HashMap::new();
    
    // Extract path parameters from the request type
    if let Some(request_type_name) = &endpoint.request {
        if let Some(TypeDefinition::Request(request)) = types.get(request_type_name) {
            for path_param in &request.path {
                let part = PathPart {
                    typ: get_type_name(&path_param.typ, types, &endpoint.name, &path_param.name).to_string(),
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
    
    Ok(Path {
        path: url_template.path.clone(),
        methods: url_template.methods.clone(),
        parts,
    })
}

/// Convert a Property to a Parameter
fn convert_parameter(
    property: &Property,
    types: &IndexMap<TypeName, TypeDefinition>,
    api_name: &str
) -> Result<Parameter> {
    let typ = get_type_name(&property.typ, types, api_name, &property.name).to_string();
    let mut options = get_enum_options(&property.typ, types);
    
    let mut default = property.server_default.as_ref().map(|default| {
        match default {
            clients_schema::ServerDefault::String(s) => serde_json::Value::String(s.clone()),
            clients_schema::ServerDefault::Number(n) => serde_json::Value::from(*n as i64),
            clients_schema::ServerDefault::Boolean(b) => serde_json::Value::Bool(*b),
            clients_schema::ServerDefault::StringArray(arr) => {
                serde_json::Value::Array(arr.iter().map(|s| serde_json::Value::String(s.clone())).collect())
            },
            clients_schema::ServerDefault::NumberArray(arr) => {
                serde_json::Value::Array(arr.iter().map(|s| serde_json::Value::String(s.clone())).collect())
            },
        }
    });
    
    // Hardcode expand_wildcards parameter
    if property.name == "expand_wildcards" {
        options = vec![
            "open".to_string(),
            "closed".to_string(),
            "hidden".to_string(),
            "none".to_string(),
            "all".to_string()
        ];
        default = Some(serde_json::Value::String("open".to_string()));
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

const BUILTIN_MAPPINGS: &[((&str, &str), &str)] = &[
    (("_builtins", "string"), "string"),
    (("_builtins", "boolean"), "boolean"),
    (("_types", "integer"), "number"),
    (("_types", "long"), "number"),
    (("_types", "time"), "time"),
    (("_types", "Duration"), "time"),
    (("_types", "ExpandWildcards"), "enum"),
    (("_types", "Field"), "string"),
    (("_types", "Fields"), "list"),
    (("_types", "Id"), "string"),
    (("_types", "IndexName"), "string"),
    (("_types", "Indices"), "list"),
    (("_types", "Name"), "string"),
    (("_types", "Names"), "list"),
    (("_types", "NodeIds"), "list"),
    (("_types", "WaitForActiveShards"), "string"),
    // sometimes list in rest-api-spec as comma-separate values are allowed
    // but the Elasticsearch specification always models it as a string.
    (("_types", "Routing"), "string"),
    (("_global.search._types", "SourceConfigParam"), "list"),
    (("_global.search._types", "TrackHits"), "boolean|long"),
];

/// Convert a ValueOf type to a simple string representation
fn get_type_name(
    value_of: &ValueOf,
    types: &IndexMap<TypeName, TypeDefinition>,
    api_name: &str,
    parameter_name: &str
) -> &'static str {
    match value_of {
        ValueOf::InstanceOf(instance) => {
            let type_name = &instance.typ;
            let key = (type_name.namespace.as_str(), type_name.name.as_str());

            if let Some(&mapped_type) = BUILTIN_MAPPINGS.iter().find(|&&(k, _)| k == key).map(|(_, v)| v) {
                mapped_type
            } else if let Some(TypeDefinition::Enum(_)) = types.get(type_name) {
                "enum"
            } else {
                tracing::warn!("{}:{} -> '{}'", api_name, parameter_name, type_name);
                "???"
            }
        }
        ValueOf::ArrayOf(_) => "list",
        ValueOf::UnionOf(_) => "object",
        ValueOf::DictionaryOf(_) => "object",
        ValueOf::UserDefinedValue(_) => "object",
        ValueOf::LiteralValue(_) => "string",
    }
}

/// Extract enum options from a ValueOf type
fn get_enum_options(value_of: &ValueOf, types: &IndexMap<TypeName, TypeDefinition>) -> Vec<String> {
    match value_of {
        ValueOf::InstanceOf(instance) => {
            if let Some(TypeDefinition::Enum(enum_def)) = types.get(&instance.typ) {
                enum_def.members.iter()
                    .map(|member| member.name.clone())
                    .collect()
            } else {
                vec![]
            }
        }
        ValueOf::UnionOf(union) => {
            // For union types, collect all literal values as options
            union.items.iter()
                .filter_map(|item| match item {
                    ValueOf::LiteralValue(literal) => {
                        Some(literal.value.to_string())
                    }
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
    api_name: &str
) -> Result<()> {
    // Look for the behavior in the _spec_utils namespace
    let behavior_type_name = TypeName::new("_spec_utils", behavior_name);

    if let Some(TypeDefinition::Interface(interface)) = types.get(&behavior_type_name) {
        // Add each property from the behavior as a query parameter
        for property in &interface.properties {
            let converted_param = convert_parameter(property, types, api_name)?;
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
        })
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
        assert_eq!(get_type_name(&string_type, &types, "test_api", "test_param"), "string");
        
        // Test array type
        let array_type = ValueOf::ArrayOf(ArrayOf {
            value: Box::new(string_type),
        });
        assert_eq!(get_type_name(&array_type, &types, "test_api", "test_param"), "list");
    }

    #[test]
    fn test_get_type_name_unknown_type_logging() {
        let types = IndexMap::new();

        // Test unknown type (should trigger the enhanced logging and return "string")
        let unknown_type = ValueOf::InstanceOf(InstanceOf {
            typ: TypeName {
                namespace: "some_namespace".into(),
                name: "UnknownType".into(),
            },
            generics: vec![],
        });

        // This should log a warning with API and parameter context
        assert_eq!(get_type_name(&unknown_type, &types, "search_api", "query_param"), "???");
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
}