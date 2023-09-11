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

use clap::{Parser, ValueEnum};
use tracing::Level;
use tracing_subscriber::fmt::format::FmtSpan;
use tracing_subscriber::FmtSubscriber;
use std::path::{Path, PathBuf};
use clients_schema::Availabilities;

fn main() -> anyhow::Result<()> {

    let cli = Cli::parse();

    let subscriber = FmtSubscriber::builder()
        .with_writer(std::io::stderr)
        .with_max_level(Level::TRACE)
        .with_span_events(FmtSpan::EXIT)
        .finish();
    tracing::subscriber::set_global_default(subscriber)?;

    cli.run()?;

    Ok(())
}

// fn main() -> anyhow::Result<()> {
//
//     let subscriber = FmtSubscriber::builder()
//         .with_writer(std::io::stderr)
//         .with_max_level(Level::TRACE)
//         .with_span_events(FmtSpan::EXIT)
//         .finish();
//     tracing::subscriber::set_global_default(subscriber)?;
//
//     clients_schema_to_openapi::convert_schema_file(
//         "../output/schema/schema-no-generics.json",
//         None,
//         |e| true,
//         //|e| e.name == "search",
//         //|e| e.name == "clear_scroll",
//         //|e| e.name.starts_with("indices."),
//         //|e| e.name == "indices.exists_alias" || e.name == "indices.delete_alias",
//         //|e| &e.name[0..1] < "d",
//         std::fs::File::create("../output/openapi/elasticsearch-openapi.json")?
//         //std::io::stdout()
//     )?;
//
//     Ok(())
// }

impl Cli {
    fn run(self) -> anyhow::Result<()>{

        let json = if self.schema == Path::new("-") {
            std::io::read_to_string(std::io::stdin())?
        } else {
            std::fs::read_to_string(self.schema)?
        };

        let mut model: clients_schema::IndexedModel = serde_json::from_str(&json)?;

        if let Some(flavor) = self.flavor {
            if flavor != SchemaFlavor::All {
                let filter: fn(&Option<Availabilities>) -> bool = match flavor {
                    SchemaFlavor::All => |_| true,
                    SchemaFlavor::Stack => |a| clients_schema::Flavor::is_stack(a),
                    SchemaFlavor::Serverless => |a| clients_schema::Flavor::is_serverless(a),
                };

                model = clients_schema::transform::filter_availability(model, filter)?;
            }
        }

        let openapi = clients_schema_to_openapi::convert_schema(&model)?;

        let output: Box<dyn std::io::Write> = {
            if let Some(output) = self.output {
                if output == Path::new("-") {
                    Box::new(std::io::stdout())
                } else {
                    Box::new(std::fs::File::create(output)?)
                }
            } else {
                Box::new(std::io::stdout())
            }
        };
        let output = std::io::BufWriter::new(output);

        serde_json::to_writer_pretty(output, &openapi)?;

        Ok(())
    }
}

#[derive(Debug, Parser)]
#[command(author, version, about, long_about = None)]
pub struct Cli {
    /// Schema file to transform. Use '-' for stdin.
    schema: PathBuf,

    #[arg(short, long)]
    /// Output file. Defaults to stdout.
    output: Option<PathBuf>,

    /// Elasticsearch flavor to produce
    #[arg(short, long)]
    flavor: Option<SchemaFlavor>
}

#[derive(Debug, Clone, PartialEq, ValueEnum)]
pub enum SchemaFlavor {
    /// No schema filtering
    All,
    /// Stack (stateful) flavor
    Stack,
    /// Serverless flavor
    Serverless,
    // /// Common subset to Stack and Serverless
    // Common,
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_full() -> anyhow::Result<()> {
        Cli {
            schema: "../../output/schema/schema-no-generics.json".into(),
            flavor: None,
            output: Some("../../output/openapi/elasticsearch-openapi.json".into())
        }.run()
    }

    #[test]
    fn test_serverless() -> anyhow::Result<()> {
        Cli {
            schema: "../../output/schema/schema-no-generics.json".into(),
            flavor: Some(SchemaFlavor::Serverless),
            output: Some("../../output/openapi/elasticsearch-serverless-openapi.json".into())
        }.run()
    }
}
