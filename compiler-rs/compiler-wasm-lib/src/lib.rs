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

use std::path::PathBuf;

use argh::FromArgs;
use clients_schema::indexmap::IndexMap;
use clients_schema::IndexedModel;
use clients_schema_to_openapi::cli::Cli;
use wasm_bindgen::prelude::*;

/// Minimal bindings to Node's `fs` module.
mod node_fs {
    use wasm_bindgen::prelude::*;

    #[wasm_bindgen(module = "node:fs")]
    extern "C" {
        #[wasm_bindgen(js_name = "readFileSync")]
        pub fn read_file_sync_to_string(path: &str, encoding: &str) -> String;

        #[wasm_bindgen(js_name = "writeFileSync")]
        pub fn write_file_sync(path: &str, content: &str);

        #[wasm_bindgen(js_name = "readdirSync")]
        pub fn read_dir_sync(path: &str) -> Vec<String>;
    }
}

/// Convert schema.json to OpenAPI. The `cwd` argument is the current directory to be used
/// if not the system-defined one, as is the case when running with `npm rum --prefix compiler`
#[wasm_bindgen]
pub fn convert_schema_to_openapi(args: Vec<String>, cwd: Option<String>) -> Result<(), String> {
    setup_hooks();

    let args = args.iter().map(String::as_str).collect::<Vec<_>>();
    let cli = Cli::from_args(&["schema-to-openapi"], &args).map_err(|err| err.output)?;
    convert0(cli, cwd).map_err(|err| err.to_string())
}

pub fn convert0(cli: Cli, cwd: Option<String>) -> anyhow::Result<()> {
    let input = match cwd {
        Some(ref cwd) => PathBuf::from(cwd).join(&cli.schema),
        None => cli.schema.clone(),
    };

    let output = match cwd {
        Some(ref cwd) => PathBuf::from(cwd).join(&cli.output),
        None => cli.output.clone(),
    };
    let redirect_path = cli.redirect_path(&output);

    let json = node_fs::read_file_sync_to_string(&input.to_string_lossy(), "utf8");
    let schema = IndexedModel::from_reader(json.as_bytes())?;

    let product_meta_path = match cwd {
        Some(ref cwd) => format!("{cwd}/specification/_doc_ids/product-meta.json"),
        None => "specification/_doc_ids/product-meta.json".to_string(),
    };
    let json_product_map = node_fs::read_file_sync_to_string(&product_meta_path, "utf8");
    let product_meta: IndexMap<String, String> =
        serde_json::from_str(&json_product_map).expect("Cannot parse product metadata file");

    let openapi = clients_schema_to_openapi::convert_schema(schema, cli.into(), product_meta)?;

    let result = serde_json::to_string_pretty(&openapi.openapi)?;
    node_fs::write_file_sync(&output.to_string_lossy(), &result);

    if let Some(redirects) = openapi.redirects {
        let path = redirect_path.unwrap();
        node_fs::write_file_sync(&path, &redirects);
    }

    Ok(())
}

#[wasm_bindgen]
pub fn convert_schema_to_individual_rest_api_spec_files(args: Vec<String>, cwd: Option<String>) -> Result<(), String> {
    setup_hooks();

    let args = args.iter().map(String::as_str).collect::<Vec<_>>();
    let cli = Cli::from_args(&["schema-to-individual-files"], &args).map_err(|err| err.output)?;
    convert1(cli, cwd).map_err(|err| err.to_string())
}

pub fn convert1(cli: Cli, cwd: Option<String>) -> anyhow::Result<()> {
    let input = match cwd {
        Some(ref cwd) => PathBuf::from(cwd).join(&cli.schema),
        None => cli.schema.clone(),
    };
    let output = match cwd {
        Some(ref cwd) => PathBuf::from(cwd).join(&cli.output),
        None => cli.output.clone(),
    };
    let json = node_fs::read_file_sync_to_string(&input.to_string_lossy(), "utf8");
    let schema = IndexedModel::from_reader(json.as_bytes())?;
    let rest_spec_files = clients_schema_to_rest_api_spec::convert_schema_to_individual_files_in_memory(schema)?;

    // for each entry in rest_spec_files, write to output directory
    for (file_name, content) in rest_spec_files {
        let file_path = output.join(file_name);
        node_fs::write_file_sync(&file_path.to_string_lossy(), &content);
    }

    Ok(())
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
