use argh::FromArgs;
use clients_schema::IndexedModel;
use clients_schema_to_rest_api_spec::convert_schema_to_individual_files;
use std::fs;
use tracing::Level;
use tracing_subscriber::fmt::format::FmtSpan;
use tracing_subscriber::FmtSubscriber;

#[derive(FromArgs)]
/// Convert clients_schema format to rest-api-spec format
struct Cli {
    /// path to the input schema.json file
    #[argh(option, short = 'i')]
    input: String,

    /// path to the output directory for individual API files
    #[argh(option, short = 'o')]
    output_dir: String,

    /// enable verbose logging
    #[argh(switch, short = 'v')]
    verbose: bool,
}

fn main() -> anyhow::Result<()> {
    let cli: Cli = argh::from_env();

    // Set up logging
    let level = if cli.verbose { Level::DEBUG } else { Level::INFO };
    let subscriber = FmtSubscriber::builder()
        .with_writer(std::io::stderr)
        .with_max_level(level)
        .with_span_events(FmtSpan::NEW | FmtSpan::CLOSE)
        .finish();

    tracing::subscriber::set_global_default(subscriber)?;

    tracing::info!("Reading schema from {}", cli.input);
    let input_file = fs::File::open(&cli.input)?;
    let indexed_model: IndexedModel = serde_json::from_reader(input_file)?;

    tracing::info!("Converting schema to rest-api-spec format");

    // Create output directory if it doesn't exist
    fs::create_dir_all(&cli.output_dir)?;

    tracing::info!("Writing individual API files to {}", cli.output_dir);
    convert_schema_to_individual_files(indexed_model, &cli.output_dir)?;

    tracing::info!("Conversion completed successfully");
    Ok(())
}
