// Licensed to Elasticsearch B.V. under one or more contributor
// license agreements. See the NOTICE file distributed with
// this work for additional information regarding copyright
// ownership. Elasticsearch B.V. licenses this file to you under
// the Apache License, Version 2.0 (the "License"); you may
// not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.

mod components;
mod paths;
mod schemas;
mod utils;
pub mod cli;

use indexmap::IndexMap;
use itertools::Itertools;
use clients_schema::{Availabilities, Availability, Flavor, IndexedModel, Privileges, Stability, UrlTemplate, Visibility};
use openapiv3::{Components, OpenAPI};
use serde_json::{Map,Value};
use clients_schema::transform::ExpandConfig;
use crate::components::TypesAndComponents;

pub struct Configuration {
    pub flavor: Option<Flavor>,
    pub namespaces: Option<Vec<String>>,
    pub branch: Option<String>,

    /// If a property value is an enumeration, the description of possible values will be copied in the
    /// property's description (also works for arrays of enums).
    pub lift_enum_descriptions: bool,

    /// include the x-codeSamples extension with language examples for all endpoints
    pub include_language_examples: bool,
}

/// Convert an API model into an OpenAPI v3 schema, optionally filtered for a given flavor
pub fn convert_schema(mut schema: IndexedModel, config: Configuration, product_meta: IndexMap<String,String>) -> anyhow::Result<OpenAPI> {
    // Expand generics
    schema = clients_schema::transform::expand_generics(schema, ExpandConfig::default())?;

    // Filter flavor
    let filter: Option<fn(&Option<Availabilities>) -> bool> = match config.flavor {
        None => None,
        Some(Flavor::Stack) => Some(|a| {
            // Generate only public items for Stack
            Flavor::Stack.visibility(a) == Some(Visibility::Public)
        }),
        Some(Flavor::Serverless) => Some(|a| {
            // Generate only public items for Serverless
            Flavor::Serverless.visibility(a) == Some(Visibility::Public)
        }),
    };

    if let Some(filter) = filter {
        schema = clients_schema::transform::filter_availability(schema, filter)?;
    }

    convert_expanded_schema(&schema, &config, &product_meta)
}

/// Convert an API model into an OpenAPI v3 schema. The input model must have all generics expanded, conversion
/// will fail otherwise.
///
/// Note: there are ways to represent [generics in JSON Schema], but its unlikely that tooling will understand it.
///
/// [generics in JSON Schema]: https://json-schema.org/blog/posts/dynamicref-and-generics
pub fn convert_expanded_schema(model: &IndexedModel, config: &Configuration, product_meta: &IndexMap<String,String>) -> anyhow::Result<OpenAPI> {
    let mut openapi = OpenAPI {
        openapi: "3.0.3".into(),
        info: info(model),
        servers: vec![],
        paths: Default::default(),
        components: Some(Components {
            security_schemes: Default::default(),
            // Filled from endpoints
            responses: Default::default(),
            // Filled from endpoints
            // TODO: add common request parameters and common cat parameters?
            parameters: Default::default(),
            examples: Default::default(),
            // Filled from endpoints
            request_bodies: Default::default(),
            headers: Default::default(),
            // Filled with type definitions
            schemas: Default::default(),
            links: Default::default(),
            callbacks: Default::default(),
            extensions: Default::default(),
        }),
        security: None,
        tags: vec![],
        external_docs: None,
        extensions: Default::default(),
    };

    let mut tac = TypesAndComponents::new(config, model, openapi.components.as_mut().unwrap());

    // Endpoints
    for endpoint in &model.endpoints {
        if let Some(namespaces) = &config.namespaces {
            if !namespaces.contains(&endpoint.name) {
                continue;
            }
        }
        paths::add_endpoint(endpoint, &mut tac, &mut openapi.paths, product_meta)?;
    }

    // // Sort maps to ensure output stability
    // openapi.paths.extensions.sort_keys();
    // if let Some(ref mut comp) = openapi.components {
    //     comp.callbacks.sort_keys();
    //     comp.examples.sort_keys();
    //     comp.extensions.sort_keys();
    //     comp.headers.sort_keys();
    //     comp.links.sort_keys();
    //     comp.parameters.sort_keys();
    //     comp.request_bodies.sort_keys();
    //     comp.responses.sort_keys();
    //     comp.schemas.sort_keys();
    //     comp.security_schemes.sort_keys();
    // }

    Ok(openapi)
}

fn info(model: &IndexedModel) -> openapiv3::Info {
    let (title, license) = if let Some(info) = &model.info {
        (
            info.title.clone(),
            Some(openapiv3::License {
                name: info.license.name.clone(),
                url: Some(info.license.url.clone()),
                extensions: Default::default(),
            }),
        )
    } else {
        ("".to_string(), None)
    };

    openapiv3::Info {
        title,
        description: None,
        terms_of_service: None,
        contact: None,
        license,
        version: "".to_string(), // TODO
        extensions: Default::default(),
    }
}

pub fn product_meta_as_extensions(namespace: &str, product_meta: &IndexMap<String,String>) -> IndexMap<String, Value> {
    let mut result = IndexMap::new();
    let mut additional_namespace= "".to_string();
    if let Some(meta) = product_meta.get(namespace) {
        additional_namespace = format!(", {meta}");
    }

    let product_str = format!("Elasticsearch{additional_namespace}");
    let mut product_feature_list: Vec<Value> = Vec::new();
    let mut product_feature: Map<String, Value> = Map::new();
    product_feature.insert("name".to_string(),Value::String("product_name".to_string()));
    product_feature.insert("content".to_string(),Value::String(product_str));
    product_feature_list.push(Value::Object(product_feature));
    result.insert("x-metaTags".to_string(), Value::Array(product_feature_list));
    result
}

pub fn auths_as_extentions(privileges: &Option<Privileges>) -> IndexMap<String, Value> {
    let mut result = IndexMap::new();
    let mut auths_list: Vec<Value> = Vec::new();

    if let Some(privs) = privileges {
        if !privs.index.is_empty() {
            let mut index_priv = "Index privileges: ".to_string();
            index_priv += &privs.index.iter()
                .map(|a| format!("`{a}`"))
                .join(",");
            index_priv += "\n";
            auths_list.push(Value::String(index_priv));
        }
        if !privs.cluster.is_empty() {
            let mut cluster_priv = "Cluster privileges: ".to_string();
            cluster_priv += &privs.cluster.iter()
                .map(|a| format!("`{a}`"))
                .join(",");
            cluster_priv += "\n";
            auths_list.push(Value::String(cluster_priv));
        }
        result.insert("x-req-auth".to_string(),Value::Array(auths_list));
    }
    result
}

pub fn paths_as_extentions(urls: Vec<UrlTemplate>) -> IndexMap<String, Value> {
    let mut result = IndexMap::new();
    if !urls.is_empty() {
        let mut paths_list: Vec<Value> = Vec::new();
        for url in urls {
            for method in url.methods {
                let lower_method = method.to_lowercase();
                let path = &url.path;
                paths_list.push(Value::String(format!(r#"<div>
                      <span class="operation-verb {lower_method}">{method}</span>
                      <span class="operation-path">{path}</span>
                      </div>
                    "#)));
            }
        }
        result.insert("x-variations".to_string(), Value::Array(paths_list));
    }
    result
}

pub fn availability_as_extensions(availabilities: &Option<Availabilities>, flavor: &Option<Flavor>) -> IndexMap<String, Value> {
    let mut result = IndexMap::new();
    convert_availabilities(availabilities, flavor, &mut result);
    result
}

pub fn convert_availabilities(availabilities: &Option<Availabilities>, flavor: &Option<Flavor>, result: &mut IndexMap<String, Value>) {
    if let Some(avails) = availabilities {
        if let Some(flav) = flavor {
            if let Some(availability) = avails.get(flav) {
                let Availability {since,stability,..} = &availability;
                let stab = stability.clone().unwrap_or(Stability::Stable);
                let mut since_str = "".to_string();
                if let Some(since) = since {
                    since_str = format!("; Added in {since}");
                }
                match stab {
                    Stability::Beta => {
                        let beta_since = format!("Beta{since_str}");
                        result.insert("x-state".to_string(), Value::String(beta_since));
                    }
                    Stability::Experimental => {
                        let exp_since = format!("Technical preview{since_str}");
                        result.insert("x-state".to_string(), Value::String(exp_since));
                    }
                    Stability::Stable => {
                        let stable_since = format!("Generally available{since_str}");
                        result.insert("x-state".to_string(), Value::String(stable_since));
                    }
                }
            }
        }
    }
}
