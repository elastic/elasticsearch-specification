use tracing::Level;
use tracing_subscriber::FmtSubscriber;

fn main() -> anyhow::Result<()> {

    let subscriber = FmtSubscriber::builder()
        .with_max_level(Level::TRACE)
        .finish();
    tracing::subscriber::set_global_default(subscriber)?;

    clients_schema_to_openapi::convert_schema_file(
        "../output/schema/schema-no-generics.json",
        |e| e.name == "search",
        std::io::stdout()
    )?;

    Ok(())
}
