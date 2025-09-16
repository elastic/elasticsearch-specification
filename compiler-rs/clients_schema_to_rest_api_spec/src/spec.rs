use indexmap::IndexMap;
use serde::{Serialize, Serializer};
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
    pub default: Option<serde_json::Value>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub deprecated: Option<Deprecation>,
}

#[derive(Debug)]
pub struct Body {
    pub description: String,
    pub required: bool,
}

impl Serialize for Body {
    fn serialize<S>(&self, serializer: S) -> Result<S::Ok, S::Error>
    where
        S: Serializer,
    {
        use serde::ser::SerializeStruct;

        let mut state = if self.required {
            serializer.serialize_struct("Body", 2)?
        } else {
            serializer.serialize_struct("Body", 1)?
        };

        if self.required {
            state.serialize_field("description", &self.description)?;
        }
        state.serialize_field("required", &self.required)?;
        state.end()
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_body_serialization_with_required_false() {
        let body = Body {
            description: "Test description".to_string(),
            required: false,
        };

        let json = serde_json::to_string(&body).unwrap();
        let parsed: serde_json::Value = serde_json::from_str(&json).unwrap();

        assert!(parsed.get("description").is_none());
        assert_eq!(parsed["required"], false);
    }
}

#[derive(Debug, Serialize)]
pub struct Deprecation {
    pub version: String,
    pub description: String,
}

#[derive(Debug, Serialize)]
pub struct Headers {
    #[serde(skip_serializing_if = "Vec::is_empty")]
    pub accept: Vec<String>,
    #[serde(skip_serializing_if = "Vec::is_empty")]
    pub content_type: Vec<String>,
}
