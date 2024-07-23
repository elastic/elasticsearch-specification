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

use std::path::{Path, PathBuf};

use clap::Parser;

use clients_schema::{Availabilities, Flavor, Visibility};

fn main() -> anyhow::Result<()> {
    let cli = Cli::parse();

    cli.run()?;

    Ok(())
}

impl Cli {
    fn run(self) -> anyhow::Result<()> {
        let json = if self.schema == Path::new("-") {
            std::io::read_to_string(std::io::stdin())?
        } else {
            std::fs::read_to_string(self.schema)?
        };

        let mut schema = clients_schema::IndexedModel::from_reader(json.as_bytes())?;

        let filter: fn(&Option<Availabilities>) -> bool = match self.flavor {
            Flavor::Stack => |a| {
                Flavor::Stack.available(a)
            },
            Flavor::Serverless => |a| {
                Flavor::Serverless.visibility(a) == Some(Visibility::Public)
            }
        };

        schema = clients_schema::transform::filter_availability(schema, filter)?;

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
        serde_json::to_writer_pretty(output, &schema).expect("TODO: panic message");

        Ok(())
    }
}


#[derive(Debug, Parser)]
#[command(author, version, about, long_about)]
pub struct Cli {
    /// input schema file, eg: ../output/schema/schema-no-generics.json
    schema: PathBuf,
    /// filter flavor, eg: stack
    flavor: Flavor,
    /// default is stdout
    #[arg(long)]
    output: Option<PathBuf>,
}