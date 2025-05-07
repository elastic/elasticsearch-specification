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

use anyhow::bail;
use clients_schema::{Flavor, IndexedModel};
use wasm_bindgen::prelude::*;
use clients_schema_to_openapi::Configuration;

#[wasm_bindgen]
pub fn convert_schema_to_openapi(json: &str, flavor: &str) -> Result<String, String> {
    setup_hooks();
    convert0(json, flavor).map_err(|err| err.to_string())
}

fn convert0(json: &str, flavor: &str) -> anyhow::Result<String> {
    let flavor = match flavor {
        "all" => None,
        "stack" => Some(Flavor::Stack),
        "serverless" => Some(Flavor::Serverless),
        _ => bail!("Unknown flavor {}", flavor),
    };

    let config = Configuration {
        flavor,
        ..Default::default()
    };
    let schema = IndexedModel::from_reader(json.as_bytes())?;
    let openapi = clients_schema_to_openapi::convert_schema(schema, config)?;
    let result = serde_json::to_string_pretty(&openapi)?;
    Ok(result)
}

pub fn setup_hooks() {
    // When the `console_error_panic_hook` feature is enabled, we can call the
    // `set_panic_hook` function at least once during initialization, and then
    // we will get better error messages if our code ever panics.
    //
    // For more details see
    // https://github.com/rustwasm/console_error_panic_hook#readme
    #[cfg(feature = "console_error_panic_hook")]
    console_error_panic_hook::set_once();

    use std::sync::Once;
    static SET_TRACING: Once = Once::new();
    SET_TRACING.call_once(|| {
        tracing_wasm::set_as_global_default();
    });
}
