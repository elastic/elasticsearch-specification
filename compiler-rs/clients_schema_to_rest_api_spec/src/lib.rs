use anyhow::Result;
use clients_schema::{
    IndexedModel, Endpoint as SchemaEndpoint, TypeDefinition, ValueOf, Property,
    UrlTemplate, TypeName, Body as SchemaBody
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
        
        // Create filename from endpoint name
        let filename = format!("{}.json", endpoint.name);
        let file_path = StdPath::new(output_dir).join(&filename);
        
        // Write individual endpoint file
        let output_file = File::create(&file_path)?;
        let writer = BufWriter::new(output_file);
        serde_json::to_writer_pretty(writer, &converted_endpoint)?;
        
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
    let stability = endpoint.availability.as_ref().map(|_| "stable".to_string());
    
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
                let converted_param = convert_parameter(param, types)?;
                params.insert(param.name.clone(), converted_param);
            }
            
            // Convert body if present
            if !matches!(request.body, SchemaBody::NoBody(_)) {
                body = Some(Body {
                    description: "Request body".to_string(),
                });
            }
        }
    }
    
    // Convert deprecation information
    let deprecated = endpoint.deprecation.as_ref().map(|dep| Deprecation {
        version: dep.version.clone(),
        description: dep.description.clone(),
    });
    
    Ok(Endpoint {
        documentation,
        stability,
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
                    typ: get_type_name(&path_param.typ, types),
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
    types: &IndexMap<TypeName, TypeDefinition>
) -> Result<Parameter> {
    let typ = get_type_name(&property.typ, types);
    let options = get_enum_options(&property.typ, types);
    
    let default = property.server_default.as_ref().map(|default| {
        match default {
            clients_schema::ServerDefault::String(s) => s.clone(),
            clients_schema::ServerDefault::Number(n) => n.to_string(),
            clients_schema::ServerDefault::Boolean(b) => b.to_string(),
            clients_schema::ServerDefault::StringArray(arr) => format!("{:?}", arr),
            clients_schema::ServerDefault::NumberArray(arr) => format!("{:?}", arr),
        }
    });
    
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

/// Convert a ValueOf type to a simple string representation
fn get_type_name(value_of: &ValueOf, types: &IndexMap<TypeName, TypeDefinition>) -> String {
    match value_of {
        ValueOf::InstanceOf(instance) => {
            // Handle builtin types
            let type_name = &instance.typ;
            match (type_name.namespace.as_str(), type_name.name.as_str()) {
                ("_builtins", "string") => "string".to_string(),
                ("_builtins", "boolean") => "boolean".to_string(),
                ("_builtins", "number") => "number".to_string(),
                ("_builtins", "integer") => "int".to_string(),
                ("_builtins", "long") => "long".to_string(),
                ("_builtins", "float") => "float".to_string(),
                ("_builtins", "double") => "double".to_string(),
                ("_builtins", "byte") => "byte".to_string(),
                ("_builtins", "short") => "short".to_string(),
                ("_builtins", "DateTime") => "time".to_string(),
                ("_builtins", "Duration") => "time".to_string(),
                _ => {
                    // Check if it's an enum type
                    if let Some(TypeDefinition::Enum(_)) = types.get(type_name) {
                        "enum".to_string()
                    } else {
                        "string".to_string() // Default fallback
                    }
                }
            }
        }
        ValueOf::ArrayOf(_) => "list".to_string(),
        ValueOf::UnionOf(_) => "object".to_string(), // Fallback for complex unions
        ValueOf::DictionaryOf(_) => "object".to_string(),
        ValueOf::UserDefinedValue(_) => "object".to_string(),
        ValueOf::LiteralValue(_) => "string".to_string(),
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
}