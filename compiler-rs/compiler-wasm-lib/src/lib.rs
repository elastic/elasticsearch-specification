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
use clients_schema::{Availabilities, Visibility};
use wasm_bindgen::prelude::*;

#[cfg(all(not(target_arch = "wasm32"), not(feature = "cargo-clippy")))]
compile_error!("To build this crate use `make compiler-wasm-lib`");

#[wasm_bindgen]
pub fn convert_schema_to_openapi(json: &str, flavor: &str) -> Result<String, String> {
    set_panic_hook();
    convert0(json, flavor).map_err(|err| err.to_string())
}

fn convert0(json: &str, flavor: &str) -> anyhow::Result<String> {
    let filter: Option<fn(&Option<Availabilities>) -> bool> = match flavor {
        "all" => None,
        "stack" => Some(|a| {
            // Generate public and private items for Stack
            clients_schema::Flavor::Stack.available(a)
        }),
        "serverless" => Some(|a| {
            // Generate only public items for Serverless
            clients_schema::Flavor::Serverless.visibility(a) == Some(Visibility::Public)
        }),
        _ => bail!("Unknown flavor {}", flavor),
    };

    let mut schema = clients_schema::IndexedModel::from_reader(json.as_bytes())?;
    schema = clients_schema::transform::expand_generics(schema)?;
    if let Some(filter) = filter {
        schema = clients_schema::transform::filter_availability(schema, filter)?;
    }
    let openapi = clients_schema_to_openapi::convert_schema(&schema)?;
    let result = serde_json::to_string_pretty(&openapi)?;
    Ok(result)
}

pub fn set_panic_hook() {
    // When the `console_error_panic_hook` feature is enabled, we can call the
    // `set_panic_hook` function at least once during initialization, and then
    // we will get better error messages if our code ever panics.
    //
    // For more details see
    // https://github.com/rustwasm/console_error_panic_hook#readme
    #[cfg(feature = "console_error_panic_hook")]
    console_error_panic_hook::set_once();
}
