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

use std::fs::File;
use indexmap::IndexMap;
use clients_schema::{IndexedModel};
use tracing::Level;
use tracing_subscriber::fmt::format::FmtSpan;
use tracing_subscriber::FmtSubscriber;
use clients_schema_to_openapi::cli::Cli;

fn main() -> anyhow::Result<()> {
    let cli: Cli = argh::from_env();

    let subscriber = FmtSubscriber::builder()
        .with_writer(std::io::stderr)
        .with_max_level(Level::TRACE)
        .with_span_events(FmtSpan::EXIT)
        .finish();
    tracing::subscriber::set_global_default(subscriber)?;

    let product_meta: IndexMap<String, String> = serde_json::from_reader(File::open("../../specification/_doc_ids/product-meta.json")?)?;
    let schema = IndexedModel::from_reader(File::open(&cli.schema)?)?;
    let output = cli.output.clone();
    let redirect_path = cli.redirect_path(&cli.output);
    let openapi = clients_schema_to_openapi::convert_schema(schema, cli.into(), product_meta)?;
    serde_json::to_writer_pretty(File::create(&output)?, &openapi.openapi)?;
    serde_json::to_writer_pretty(File::create(&output)?, &openapi.openapi)?;

    if let Some(redirects) = openapi.redirects {
        let path = redirect_path.unwrap();
        std::fs::write(path, &redirects)?;
    }

    Ok(())
}
