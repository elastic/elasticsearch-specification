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

use std::env;
use std::path::PathBuf;
use std::{collections::BTreeSet, path::Path};

use openapi_to_clients_schema::openapi::OpenAPI;
use tracing::{info, Level};
use tracing_subscriber::FmtSubscriber;

fn main() -> anyhow::Result<()> {
    let subscriber = FmtSubscriber::builder().with_max_level(Level::TRACE).finish();
    tracing::subscriber::set_global_default(subscriber)?;

    let args: Vec<String> = env::args().collect();
    let path = match args.len() - 1 {
        0 => "../../../ent-search/swagger/enterprise-search.json",
        1 => &args[1],
        _ => return Err(anyhow::anyhow!("expected a single argument")),
    };

    info!("Loading OpenAPI from {path}");
    let data = std::fs::read_to_string(path)?;

    // Track unused fields, to find any additional stuff the OpenAPI model would miss
    let mut unused = BTreeSet::new();

    let open_api = match Path::new(path).extension() {
        Some(ext) if ext == "json" => {
            let mut deser = serde_json::Deserializer::from_str(&data);
            serde_ignored::deserialize(&mut deser, |path| {
                unused.insert(path.to_string());
            })
            .map_err(From::from)
        }
        Some(ext) if ext == "yml" || ext == "yaml" => {
            let deser = serde_yml::Deserializer::from_str(&data);
            serde_ignored::deserialize(deser, |path| {
                unused.insert(path.to_string());
            })
            .map_err(From::from)
        }
        _ => Err(anyhow::anyhow!(format!("Unsupported file extension {:?}", path))),
    }?;

    if !unused.is_empty() {
        println!("Unused fields in the OpenAPI schema: {:?}", unused);
    }

    let sch_json = openapi_to_clients_schema::generate(&OpenAPI(open_api))?;

    let dest = PathBuf::from(path).with_extension("schema.json");
    let output = std::fs::File::create(dest)?;
    serde_json::to_writer_pretty(output, &sch_json)?;

    Ok(())
}
