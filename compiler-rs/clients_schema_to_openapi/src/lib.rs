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

use clients_schema::{Availabilities, Flavor, IndexedModel, Stability, Visibility};
use openapiv3::{Components, OpenAPI};
use clients_schema::transform::ExpandConfig;
use crate::components::TypesAndComponents;

pub struct Configuration {
    pub flavor: Option<Flavor>,
    pub namespaces: Option<Vec<String>>,

    /// If a property value is an enumeration, the description of possible values will be copied in the
    /// property's description (also works for arrays of enums).
    pub lift_enum_descriptions: bool,

    /// Will output endpoints having multiple paths into a single operation. The operation's path will
    /// be the longest one (with values for all optional parameters), and the other paths will be added
    /// at the beginning of the operation's description.
    pub merge_multipath_endpoints: bool,
}

/// Convert an API model into an OpenAPI v3 schema, optionally filtered for a given flavor
pub fn convert_schema(mut schema: IndexedModel, config: Configuration) -> anyhow::Result<OpenAPI> {
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

    convert_expanded_schema(&schema, &config)
}

/// Convert an API model into an OpenAPI v3 schema. The input model must have all generics expanded, conversion
/// will fail otherwise.
///
/// Note: there are ways to represent [generics in JSON Schema], but its unlikely that tooling will understand it.
///
/// [generics in JSON Schema]: https://json-schema.org/blog/posts/dynamicref-and-generics
pub fn convert_expanded_schema(model: &IndexedModel, config: &Configuration) -> anyhow::Result<OpenAPI> {
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
        paths::add_endpoint(endpoint, &mut tac, &mut openapi.paths)?;
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

pub fn availability_as_extensions(availabilities: &Option<Availabilities>) -> IndexMap<String, serde_json::Value> {
    let mut result = IndexMap::new();

    if let Some(avails) = availabilities {
        // We may have several availabilities, but since generally exists only on stateful (stack)
        for (_, availability) in avails {
            if let Some(stability) = &availability.stability {
                match stability {
                    Stability::Beta => {
                        result.insert("x-beta".to_string(), serde_json::Value::Bool(true));
                    }
                    Stability::Experimental => {
                        result.insert("x-state".to_string(), serde_json::Value::String("Technical preview".to_string()));
                    }
                    Stability::Stable => {
                        if let Some(since) = &availability.since {
                            let stable_since = "Added in ".to_string() + since;
                            result.insert("x-state".to_string(), serde_json::Value::String(stable_since));
                        }
                    }
                }
            }
        }
    }

    result
}
