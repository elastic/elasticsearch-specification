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

use std::collections::BTreeSet;
use openapi_to_clients_schema::openapi::OpenAPI;
use tracing::{Level, info};
use tracing_subscriber::FmtSubscriber;
use std::path::PathBuf;

fn main() -> anyhow::Result<()> {

    let subscriber = FmtSubscriber::builder()
        .with_max_level(Level::TRACE)
        .finish();
    tracing::subscriber::set_global_default(subscriber)?;

    //let file = "../../ent-search/swagger/v1/enterprise-search.json";
    //let file = "../../ent-search/swagger/v1/workplace-search.json";
    let file = "./openapi_to_clients_schema/fixtures/workplace-search.json";

    let src = PathBuf::from(file);
    let dest = src.with_extension("schema.json");

    info!("Loading OpenAPI from {file}");

    let file = std::fs::File::open(file)?;

    let json_deser = &mut serde_json::Deserializer::from_reader(file);

    // Track unused fields, to find any additional stuff the OpenAPI model would miss
    let mut unused = BTreeSet::new();

    let open_api: openapiv3::OpenAPI = serde_ignored::deserialize(json_deser, |path| {
        unused.insert(path.to_string());
    })?;

    if !unused.is_empty() {
        println!("Unused fields in the OpenAPI schema: {:?}", unused);
    }

    let sch_json = openapi_to_clients_schema::generate(&OpenAPI(open_api))?;
    let output = std::fs::File::create(dest)?;
    serde_json::to_writer_pretty(output, &sch_json)?;

    Ok(())
}

