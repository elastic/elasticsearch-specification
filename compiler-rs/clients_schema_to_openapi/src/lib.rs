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

use std::collections::HashSet;
use std::io::{BufWriter, Write};
use std::path::Path;
use indexmap::IndexMap;

use clients_schema::{Availabilities, Endpoint, IndexedModel, Stability};
use openapiv3::{Components, OpenAPI};
use tracing::warn;

use crate::components::TypesAndComponents;

pub fn convert_schema_file(
    path: impl AsRef<Path>,
    filter: Option<fn(&Option<Availabilities>) -> bool>,
    endpoint_filter: fn(e: &Endpoint) -> bool,
    out: impl Write,
) -> anyhow::Result<()> {
    // Parsing from a string is faster than using a buffered reader when there is a need for look-ahead
    // See https://github.com/serde-rs/json/issues/160
    let json = &std::fs::read_to_string(path)?;
    let json_deser = &mut serde_json::Deserializer::from_str(json);

    let mut unused = HashSet::new();
    let mut model: IndexedModel = serde_ignored::deserialize(json_deser, |path| {
        if let serde_ignored::Path::Map { parent: _, key } = path {
            unused.insert(key);
        }
    })?;
    if !unused.is_empty() {
        let msg = unused.into_iter().collect::<Vec<_>>().join(", ");
        warn!("Unknown fields found in schema.json: {}", msg);
    }

    if let Some(filter) = filter {
        model = clients_schema::transform::filter_availability(model, filter)?;
    }

    model.endpoints.retain(endpoint_filter);

    let openapi = convert_schema(&model)?;
    serde_json::to_writer_pretty(BufWriter::new(out), &openapi)?;
    Ok(())
}

/// Convert an API model into an OpenAPI v3 schema. The input model must have all generics expanded, converstion
/// will fail otherwise.
///
/// Note: there are ways to represent [generics in JSON Schema], but its unlikely that tooling will understood it.
///
/// [generics in JSON Schema]: https://json-schema.org/blog/posts/dynamicref-and-generics
pub fn convert_schema(model: &IndexedModel) -> anyhow::Result<OpenAPI> {
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

    let mut tac = TypesAndComponents::new(model, openapi.components.as_mut().unwrap());

    // Endpoints
    for endpoint in &model.endpoints {
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
            if let Some(since) = &availability.since {
                result.insert("x-available-since".to_string(), serde_json::Value::String(since.clone()));
            }
            if let Some(stability) = &availability.stability {
                match stability {
                    Stability::Beta => {
                        result.insert("x-beta".to_string(), serde_json::Value::Bool(true));
                    }
                    Stability::Experimental => {
                        result.insert("x-state".to_string(), serde_json::Value::String("Technical preview".to_string()));
                    }
                    _ => {}
                }
            }
        }
    }

    result
}
