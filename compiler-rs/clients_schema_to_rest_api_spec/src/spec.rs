use indexmap::IndexMap;
use serde::Serialize;
use std::collections::HashMap;

#[derive(Debug, Serialize)]
pub struct Endpoint {
    pub documentation: Documentation,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub stability: Option<String>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub visibility: Option<String>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub headers: Option<Headers>,
    pub url: Url,
    #[serde(skip_serializing_if = "IndexMap::is_empty")]
    pub params: IndexMap<String, Parameter>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub body: Option<Body>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub deprecated: Option<Deprecation>,
}

#[derive(Debug, Serialize)]
pub struct Documentation {
    pub url: String,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub description: Option<String>,
}

#[derive(Debug, Serialize)]
pub struct Url {
    pub paths: Vec<Path>,
}

#[derive(Debug, Serialize)]
pub struct Path {
    pub path: String,
    pub methods: Vec<String>,
    #[serde(skip_serializing_if = "HashMap::is_empty")]
    pub parts: HashMap<String, PathPart>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub deprecated: Option<Deprecation>,
}

#[derive(Debug, Serialize)]
pub struct PathPart {
    #[serde(rename = "type")]
    pub typ: String,
    #[serde(skip_serializing_if = "Vec::is_empty")]
    pub options: Vec<String>,
    pub description: String,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub deprecated: Option<Deprecation>,
}

#[derive(Debug, Serialize)]
pub struct Parameter {
    #[serde(rename = "type")]
    pub typ: String,
    pub description: String,
    #[serde(skip_serializing_if = "Vec::is_empty")]
    pub options: Vec<String>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub default: Option<serde_json::Value>,
    #[serde(skip_serializing_if = "is_false")]
    pub required: bool,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub deprecated: Option<Deprecation>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub visibility: Option<String>,
}

fn is_false(b: &bool) -> bool {
    *b == false
}

#[derive(Debug, Serialize)]
pub struct Body {
    pub description: String,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub serialize: Option<String>,
    pub required: bool,
}

#[derive(Debug, Serialize)]
pub struct Deprecation {
    pub version: String,
    #[serde(skip_serializing_if = "String::is_empty")]
    pub description: String,
}

#[derive(Debug, Serialize)]
pub struct Headers {
    #[serde(skip_serializing_if = "Vec::is_empty")]
    pub accept: Vec<String>,
    #[serde(skip_serializing_if = "Vec::is_empty")]
    pub content_type: Vec<String>,
}
