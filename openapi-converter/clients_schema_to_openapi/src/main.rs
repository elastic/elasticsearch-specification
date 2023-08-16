use tracing::Level;
use tracing_subscriber::fmt::format::FmtSpan;
use tracing_subscriber::FmtSubscriber;

use argh::FromArgs;




fn main() -> anyhow::Result<()> {



    let subscriber = FmtSubscriber::builder()
        .with_writer(std::io::stderr)
        .with_max_level(Level::TRACE)
        .with_span_events(FmtSpan::EXIT)
        .finish();
    tracing::subscriber::set_global_default(subscriber)?;

    clients_schema_to_openapi::convert_schema_file(
        "../output/schema/schema-no-generics.json",
        |e| true,
        //|e| e.name == "search",
        std::fs::File::create("../output/openapi/elasticsearch-openapi.json")?
        //std::io::stdout()
    )?;

    Ok(())
}
