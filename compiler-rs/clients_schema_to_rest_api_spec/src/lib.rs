use anyhow::Result;
use clients_schema::{
    Body as SchemaBody, Endpoint as SchemaEndpoint, Enum, Flavor, IndexedModel, InstanceOf, Property, Stability,
    TypeDefinition, TypeName, UnionOf, UrlTemplate, ValueOf, Visibility,
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
    let expanded_model =
        clients_schema::transform::expand_generics(model, clients_schema::transform::ExpandConfig::default())?;

    // Generate _common.json from CommonQueryParameters behavior
    let common = build_common_params(&expanded_model.types)?;
    let common_path = StdPath::new(output_dir).join("_common.json");
    let common_file = File::create(&common_path)?;
    serde_json::to_writer_pretty(BufWriter::new(common_file), &common)?;
    tracing::debug!("Wrote _common.json to {:?}", common_path);

    for endpoint in expanded_model.endpoints {
        let converted_endpoint = convert_endpoint(&endpoint, &expanded_model.types)?;
        let wrapped_content = HashMap::from([(endpoint.name.clone(), converted_endpoint)]);

        let filename = format!("{}.json", endpoint.name);
        let file_path = StdPath::new(output_dir).join(&filename);

        let output_file = File::create(&file_path)?;
        serde_json::to_writer_pretty(BufWriter::new(output_file), &wrapped_content)?;

        tracing::debug!("Wrote {} to {:?}", endpoint.name, file_path);
    }

    Ok(())
}

pub fn convert_schema_to_individual_files_in_memory(model: IndexedModel) -> Result<HashMap<String, String>> {
    let expanded_model =
        clients_schema::transform::expand_generics(model, clients_schema::transform::ExpandConfig::default())?;
    let mut out: HashMap<String, String> = HashMap::new();

    let common = build_common_params(&expanded_model.types)?;
    out.insert("_common.json".to_string(), serde_json::to_string_pretty(&common)?);

    for endpoint in expanded_model.endpoints {
        let converted_endpoint = convert_endpoint(&endpoint, &expanded_model.types)?;
        let wrapped_content = HashMap::from([(endpoint.name.clone(), converted_endpoint)]);
        let filename = format!("{}.json", endpoint.name);
        let json = serde_json::to_string_pretty(&wrapped_content)?;
        out.insert(filename, json);
    }
    Ok(out)
}

/// Build the _common.json content from the CommonQueryParameters behavior
fn build_common_params(types: &IndexMap<TypeName, TypeDefinition>) -> Result<CommonSpec> {
    let behavior_type_name = TypeName::new("_spec_utils", "CommonQueryParameters");
    let mut params = IndexMap::new();

    if let Some(TypeDefinition::Interface(interface)) = types.get(&behavior_type_name) {
        for property in &interface.properties {
            let converted = convert_parameter(property, types)?;
            params.insert(property.name.clone(), converted);
        }
    } else {
        tracing::warn!("CommonQueryParameters behavior not found in schema");
    }

    Ok(CommonSpec {
        documentation: Documentation {
            url: Some("https://www.elastic.co/guide/en/elasticsearch/reference/current/common-options.html".to_string()),
            description: Some("Parameters that are accepted by all API endpoints.".to_string()),
        },
        params,
    })
}

/// Convert a single endpoint from clients_schema to rest-api-spec format
fn convert_endpoint(endpoint: &SchemaEndpoint, types: &IndexMap<TypeName, TypeDefinition>) -> Result<Endpoint> {
    // Extract documentation
    let documentation = Documentation {
        url: endpoint.doc_url.clone(),
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

    if let Some(request_type_name) = &endpoint.request
        && let Some(TypeDefinition::Request(request)) = types.get(request_type_name) {
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
                    serialize: body_serialize_value(&endpoint.name),
                    required: endpoint.request_body_required,
                });
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

    // Extract path parameters from the request type
    if let Some(request_type_name) = &endpoint.request
        && let Some(TypeDefinition::Request(request)) = types.get(request_type_name) {
            for path_param in &request.path {
                // Only include this path parameter if it's referenced in this specific URL template
                let param_pattern = format!("{{{}}}", path_param.name);
                if url_template.path.contains(&param_pattern) {
                    let part = PathPart {
                        typ: get_type_name(&path_param.typ, types)?,
                        options: get_enum_options(&path_param.typ, types),
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
        methods: url_template.methods.as_slice().try_into()?,
        parts,
        deprecated: url_template.deprecation.as_ref().map(|dep| Deprecation {
            version: dep.version.clone(),
            description: dep.description.clone(),
        }),
    })
}

/// Convert a Property to a Parameter
fn convert_parameter(property: &Property, types: &IndexMap<TypeName, TypeDefinition>) -> Result<Parameter> {
    let typ = get_type_name(&property.typ, types)?;
    let options = get_enum_options(&property.typ, types);

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

    if typ == ParamType::NumberOrString {
        // convert default to integer
        default = default.and_then(|def| match def {
            serde_json::Value::String(s) => s.parse::<i64>().ok().map(serde_json::Value::from),
            _ => Some(def),
        });
    }

    let deprecated = property.deprecation.as_ref().map(|dep| Deprecation {
        version: dep.version.clone(),
        description: dep.description.clone(),
    });

    let mut visibility = None;
    if let Some(availabilities) = &property.availability
        && let Some(stack_availability) = availabilities.get(&Flavor::Stack)
    {
        visibility = stack_availability.visibility.as_ref().and_then(|v| match v {
            Visibility::Public => None,
            _ => Some(v.clone()),
        });
    }

    Ok(Parameter {
        typ,
        description: property.description.clone().unwrap_or_default(),
        options,
        default,
        required: property.required,
        deprecated,
        visibility,
    })
}

// rest-api-spec types:
// list|date|time|string|enum|int|double|long|boolean|number

struct BuiltinMappings;

impl BuiltinMappings {
    const MAPPINGS: &[(&str, &str, ParamType)] = &[
        ("_builtins", "string", ParamType::String),
        ("_builtins", "boolean", ParamType::Boolean),
        ("_builtins", "number", ParamType::Number),
        ("_types", "integer", ParamType::Int),
        ("_types", "uint", ParamType::Int),
        ("_types", "long", ParamType::Long),
        ("_types", "float", ParamType::Number),
        ("_types", "double", ParamType::Double),
        ("_types", "time", ParamType::Time),
        ("_types", "Duration", ParamType::Time),
        ("_types", "DateTime", ParamType::Date),
        ("_types", "ByteSize", ParamType::String),
        // hard cases
        ("_types", "WaitForActiveShards", ParamType::String),
        ("_global.search._types", "TrackHits", ParamType::BooleanOrLong),
        ("_types", "Slices", ParamType::NumberOrString),
        ("cluster.health", "WaitForNodes", ParamType::String),
        // sometimes list in rest-api-spec as comma-separate values are allowed
        // but the Elasticsearch specification always models it as a string.
        ("_global.search._types", "SourceConfigParam", ParamType::List),
    ];

    fn get(namespace: &str, name: &str) -> Option<ParamType> {
        for (ns, n, param_type) in Self::MAPPINGS {
            if *ns == namespace && *n == name {
                return Some(*param_type);
            }
        }
        None
    }
}

fn array_item_type(array: &clients_schema::ArrayOf) -> Option<&TypeName> {
    match &*array.value {
        ValueOf::InstanceOf(inst) => Some(&inst.typ),
        _ => None,
    }
}

fn is_list_enum(union: &UnionOf) -> Option<TypeName> {
    if union.items.len() != 2 {
        return None;
    }

    // X | X[]
    if let ValueOf::InstanceOf(instance) = &union.items[0]
        && let ValueOf::ArrayOf(array) = &union.items[1]
        && let Some(array_type) = array_item_type(array)
        && instance.typ.name == array_type.name
    {
        return Some(instance.typ.clone());
    }

    // X[] | X
    if let ValueOf::ArrayOf(array) = &union.items[0]
        && let ValueOf::InstanceOf(instance) = &union.items[1]
        && let Some(array_type) = array_item_type(array)
        && instance.typ.name == array_type.name
    {
        return Some(instance.typ.clone());
    }

    None
}

fn is_index_name_and_alias(union: &UnionOf) -> bool {
    // Fleet APIs use IndexName | IndexAlias for index in path
    if union.items.len() == 2 {
        let mut has_index_name = false;
        let mut has_index_alias = false;
        for item in &union.items {
            if let ValueOf::InstanceOf(instance) = item {
                if instance.typ == TypeName::new("_types", "IndexName") {
                    has_index_name = true;
                } else if instance.typ == TypeName::new("_types", "IndexAlias") {
                    has_index_alias = true;
                }
            }
        }
        return has_index_name && has_index_alias;
    }
    false
}

fn is_literal(instance: &InstanceOf) -> Option<ParamType> {
    BuiltinMappings::get(&instance.typ.namespace, &instance.typ.name)
}

/// Convert a ValueOf type to a ParamType
fn get_type_name(value_of: &ValueOf, types: &IndexMap<TypeName, TypeDefinition>) -> Result<ParamType> {
    match value_of {
        ValueOf::ArrayOf(_) => Ok(ParamType::List),
        ValueOf::UnionOf(union) => {
            if is_list_enum(union).is_some() {
                Ok(ParamType::List)
            } else if is_index_name_and_alias(union) {
                Ok(ParamType::String)
            } else {
                anyhow::bail!("Unhandled union type: {:?}", union)
            }
        }
        ValueOf::LiteralValue(_) => Ok(ParamType::String),
        ValueOf::InstanceOf(instance) => {
            let type_name = &instance.typ;

            if let Some(mapped_type) = BuiltinMappings::get(&type_name.namespace, &type_name.name) {
                return Ok(mapped_type);
            }

            if let Some(TypeDefinition::Enum(_)) = types.get(type_name) {
                return Ok(ParamType::Enum);
            }

            let full_type = types
                .get(type_name)
                .ok_or_else(|| anyhow::anyhow!("Type not found: {}:{}", type_name.namespace, type_name.name))?;

            match full_type {
                TypeDefinition::TypeAlias(alias) => match &alias.typ {
                    ValueOf::UnionOf(union) if is_list_enum(union).is_some() => Ok(ParamType::List),
                    ValueOf::InstanceOf(inst) => is_literal(inst).ok_or_else(|| {
                        anyhow::anyhow!(
                            "Unhandled type alias for {}:{}: {:?}",
                            type_name.namespace,
                            type_name.name,
                            alias.typ
                        )
                    }),
                    _ => anyhow::bail!(
                        "Unhandled type alias for {}:{}: {:?}",
                        type_name.namespace,
                        type_name.name,
                        alias.typ
                    ),
                },
                _ => anyhow::bail!(
                    "Expected TypeAlias for {}:{}, got {:?}",
                    type_name.namespace,
                    type_name.name,
                    full_type
                ),
            }
        }
        other => anyhow::bail!("Unhandled ValueOf variant: {:?}", other),
    }
}

/// Extract enum options from a ValueOf type
fn get_enum_options(value_of: &ValueOf, types: &IndexMap<TypeName, TypeDefinition>) -> Vec<String> {
    match value_of {
        ValueOf::InstanceOf(instance) => {
            match types.get(&instance.typ) {
                Some(TypeDefinition::Enum(enum_def)) => extract_enum_members(enum_def),
                // While ExpandWildcards is ultimately an enum, it is specified, lists are allowed too:
                // export type ExpandWildcards = ExpandWildcard | ExpandWildcard[]
                // and in request files this alias is used
                // expand_wildcards?: ExpandWildcards
                Some(TypeDefinition::TypeAlias(alias)) => {
                    if let ValueOf::UnionOf(union) = &alias.typ
                        && let Some(union_type) = is_list_enum(union) {
                            match types.get(&union_type) {
                                Some(TypeDefinition::Enum(enum_def)) => {
                                    return extract_enum_members(enum_def);
                                }
                                _ => {
                                    tracing::debug!("Expected enum type for union type: {:?}", union_type);
                                    return vec![];
                                }
                            }
                        }
                    tracing::debug!("Expected union type for type alias: {:?}", alias);
                    vec![]
                }
                _ => {
                    tracing::debug!("Found union type for instance: {:?}", types.get(&instance.typ));
                    vec![]
                }
            }
        }
        ValueOf::UnionOf(union) => {
            if let Some(union_type) = is_list_enum(union) {
                match types.get(&union_type) {
                    Some(TypeDefinition::Enum(enum_def)) => {
                        return extract_enum_members(enum_def);
                    }
                    _ => {
                        tracing::debug!("Expected enum type for union type: {:?}", union_type);
                        return vec![];
                    }
                }
            }
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

fn extract_enum_members(enum_def: &Enum) -> Vec<String> {
    enum_def
        .members
        .iter()
        .map(|member: &clients_schema::EnumMember| member.name.clone())
        .collect()
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
/// Defaults to Public if no specific visibility is set
fn extract_visibility_from_availabilities(availabilities: &Option<clients_schema::Availabilities>) -> Option<Visibility> {
    let flavor = Flavor::Stack;
    if let Some(visibility) = flavor.visibility(availabilities) {
        return Some(visibility.clone());
    }

    // No availability restrictions means public
    Some(Visibility::Public)
}

/// Extract stability information from availabilities
/// Uses stack flavor stability, defaults to Stable if not specified
fn extract_stability_from_availabilities(availabilities: &Option<clients_schema::Availabilities>) -> Option<Stability> {
    if let Some(avails) = availabilities
        && let Some(stack_availability) = avails.get(&Flavor::Stack)
        && let Some(ref stability) = stack_availability.stability
    {
        return Some(stability.clone());
    }
    // Default to stable if no stability is explicitly set
    Some(Stability::Stable)
}

fn body_serialize_value(endpoint_name: &str) -> Option<String> {
    let special_cases: &[&str] = &[
        "bulk",
        "msearch",
        "msearch_template",
        "fleet.msearch",
        "ml.post_data",
        "monitoring.bulk",
        "text_structure.find_structure",
    ];

    // Some endpoints contain "serialize": "bulk" in rest-api-spec
    special_cases.contains(&endpoint_name).then(|| "bulk".to_string())
}

#[cfg(test)]
mod tests {
    use super::*;
    use clients_schema::*;

    #[test]
    fn test_full_schema_conversion() {
        let json = std::fs::read_to_string("../../output/schema/schema.json").unwrap();
        let model: IndexedModel = serde_json::from_str(&json).unwrap();
        let result = convert_schema_to_individual_files_in_memory(model).unwrap();

        assert!(result.contains_key("_common.json"), "_common.json should be generated");
        assert!(result.len() > 100, "Expected at least 100 endpoint files, got {}", result.len());

        for (filename, json_str) in &result {
            let parsed: serde_json::Value = serde_json::from_str(json_str)
                .unwrap_or_else(|e| panic!("Invalid JSON in {}: {}", filename, e));
            assert!(parsed.is_object(), "{} should be a JSON object", filename);
        }
    }

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
        assert_eq!(get_type_name(&string_type, &types).unwrap(), ParamType::String);

        // Test array type
        let array_type = ValueOf::ArrayOf(ArrayOf {
            value: Box::new(string_type),
        });
        assert_eq!(get_type_name(&array_type, &types).unwrap(), ParamType::List);
    }

    #[test]
    fn test_body_struct_has_required_field() {
        use crate::spec::Body;

        // Simple test to verify Body struct has required field
        let body = Body {
            description: "Test body".to_string(),
            serialize: None,
            required: true,
        };

        assert_eq!(body.description, "Test body");
        assert_eq!(body.required, true);

        let body_optional = Body {
            description: "Optional body".to_string(),
            serialize: None,
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
            doc_url_serverless: None,
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
