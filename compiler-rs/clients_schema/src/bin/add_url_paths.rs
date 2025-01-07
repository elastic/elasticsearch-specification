use std::collections::HashMap;
use std::path::{Path, PathBuf};
use clap::Parser;
use itertools::Itertools;


fn main() -> anyhow::Result<()> {
    let cli = Cli::parse();
    cli.run()?;
    Ok(())
}

// Example usage:
// (cd compiler-rs; find ../specification -name '*Request.ts' | cargo run --bin add_url_paths ../output/schema/schema.json | sh)

/// Adds url paths to request definitions. Stdin must be a list of files, one per line.
/// Outputs a shell script that uses ast-grep.
#[derive(Debug, Parser)]
#[command(author, version, about, long_about)]
pub struct Cli {
    /// input schema file, eg: ../output/schema/schema-no-generics.json
    schema: PathBuf,
}

impl Cli {
    pub fn run(&self) -> anyhow::Result<()> {

        // Canonicalize all file names, so that we can do some suffix mapping from the schema locations.
        let files: Vec<PathBuf> = std::io::read_to_string(std::io::stdin())?
            .lines()
            .flat_map(|line| std::fs::canonicalize(line)
                .map_err(|e| {
                    eprintln!("File {} not found", line);
                    Result::<PathBuf, _>::Err(e)
                })) // Remove errors
            .collect();

        let json = std::fs::read_to_string(&self.schema)?;
        let schema = clients_schema::IndexedModel::from_reader(json.as_bytes())?;

        let mut location_to_request = HashMap::<&Path, &clients_schema::Endpoint>::new();
        for ep in &schema.endpoints {
            let Some(req_name) = ep.request.as_ref() else {
                //eprintln!("Skipping endpoint {} with no request", ep.name);
                continue;
            };

            let type_def = schema.types.get(req_name).unwrap();
            let location = type_def.base().spec_location.as_ref().unwrap();
            let location = Path::new(location.split_once('#').unwrap().0);

            location_to_request.insert(location, ep);
        };

        for file in files {
            if let Some((_, endpoint)) = location_to_request.iter().find(|(location, _)| file.ends_with(location)) {
                generate_astgrep_command(&file, endpoint);
            } else {
                eprintln!("No request found for {:?}", file);
            }
        }

        Ok(())
    }
}

fn generate_astgrep_command(file: &Path, endpoint: &clients_schema::Endpoint) {

    let text = std::fs::read_to_string(file).unwrap();
    if text.contains("urls:") {
        eprintln!("Found an existing 'url' property. Skipping {file:?}");
        return;
    }

    // We cannot express conditional parts in the source form of patterns.

    // Requests with generic parameters
    let request_expr = if text.contains("Request<") {
        "Request<$$$PARAM>"
    } else {
        "Request"
    };

    // A handful of requests don't have an extends clause
    let extends_expr = if text.contains(" extends ") {
        "extends $REQBASE"
    } else {
        ""
    };

    let urls: String = endpoint.urls.iter().map(|url| {
        let path = &url.path;
        let methods = url.methods.iter().map(|method| format!("\"{}\"", method)).join(", ");
        let deprecation = match &url.deprecation {
            Some(deprecation) => format!("/** @deprecated {} {} */\n      ", deprecation.version, deprecation.description),
            None => "".to_string(),
        };

        format!(r#"    {{
      {deprecation}path: "{path}",
      methods: [{methods}]
    }}"#)
    }).join(",\n");

    let pattern = format!(r#"interface {request_expr} {extends_expr} {{
  $$$PROPS
}}"#);

    let fix = format!(r#"interface {request_expr} {extends_expr} {{
  urls: [
{urls}
  ],
  $$$PROPS
}}"#);

    let file = file.to_str().unwrap();
    println!("#----- {file}");
    println!(r#"ast-grep --update-all --lang ts --pattern '{pattern}' --rewrite '{fix}' "{file}""#);

    println!();
}
