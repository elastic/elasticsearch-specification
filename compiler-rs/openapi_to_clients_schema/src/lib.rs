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

pub mod endpoints;
pub mod openapi;
pub mod types;

use std::convert::Into;

use anyhow::Error;
use clients_schema::IndexedModel;
use openapi::OpenAPI;
use tracing::warn;
use types::Types;

/// Generate a schema.json from an OpenAPI schema
pub fn generate(open_api: &OpenAPI) -> anyhow::Result<clients_schema::IndexedModel> {
    let mut json_schema = clients_schema::IndexedModel::default();

    let mut schema_types = generate_types(open_api)?;
    generate_endpoints(open_api, &mut json_schema, &mut schema_types)?;

    json_schema.types = schema_types
        .types()
        .into_iter()
        .map(|t| (t.name().clone(), t))
        .collect();

    Ok(json_schema)
}

/// Generate all types from OpenAPI components
fn generate_types(open_api: &OpenAPI) -> anyhow::Result<types::Types> {
    if let Some(ref components) = open_api.components {
        let mut types = types::Types::default();
        for (id, schema) in &components.schemas {
            let result = types::generate_type(open_api, id, &schema.into(), &mut types);

            if let Err(err) = result {
                warn!("Problem with type '{id}'\n    {err}\n    Definition: {:?}", &schema);
            }
        }
        let _ = types.check_tracker(); // TODO: actually fail
        Ok(types)
    } else {
        Err(Error::msg("No components found"))
    }
}

fn generate_endpoints(open_api: &OpenAPI, json_schema: &mut IndexedModel, types: &mut Types) -> anyhow::Result<()> {
    for (id, path) in &open_api.paths.paths {
        let endpoint = endpoints::generate_endpoint(id, path, types)?;
        json_schema.endpoints.push(endpoint);
    }

    Ok(())
}
