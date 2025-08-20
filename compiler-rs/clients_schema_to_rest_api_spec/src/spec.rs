use std::collections::HashMap;
use serde::Serialize;
use indexmap::IndexMap;

#[derive(Debug, Serialize)]
pub struct Endpoint {
    pub documentation: Documentation,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub stability: Option<String>,
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
}

#[derive(Debug, Serialize)]
pub struct PathPart {
    #[serde(rename = "type")]
    pub typ: String,
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
    pub default: Option<String>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub deprecated: Option<Deprecation>,
}

#[derive(Debug, Serialize)]
pub struct Body {
    pub description: String,
}

#[derive(Debug, Serialize)]
pub struct Deprecation {
    pub version: String,
    pub description: String,
}