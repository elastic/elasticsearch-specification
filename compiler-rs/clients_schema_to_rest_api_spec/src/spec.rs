use indexmap::IndexMap;
use serde::{Serialize, Serializer};
use std::collections::HashMap;

#[derive(Debug, Clone)]
pub struct HttpMethods(Vec<http::Method>);

impl Serialize for HttpMethods {
    fn serialize<S>(&self, serializer: S) -> Result<S::Ok, S::Error>
    where
        S: Serializer,
    {
        serializer.collect_seq(self.0.iter().map(http::Method::as_str))
    }
}

impl TryFrom<&[String]> for HttpMethods {
    type Error = http::method::InvalidMethod;

    fn try_from(methods: &[String]) -> Result<Self, Self::Error> {
        methods
            .iter()
            .map(|m| http::Method::from_bytes(m.as_bytes()))
            .collect::<Result<Vec<_>, _>>()
            .map(HttpMethods)
    }
}

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
    pub url: Option<String>,
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
    pub methods: HttpMethods,
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
    !*b
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
