mod paths;
mod schemas;

use std::io::Write;
use std::path::Path;

use clients_schema::{Model, Property, TypeDefinition, TypeName, TypeRegistry, ValueOf};

pub fn convert_schema(path: impl AsRef<Path>, out: impl Write) -> anyhow::Result<()> {
    let file = std::fs::File::open(path)?;

    let model: Model = serde_json::from_reader(file)?;
    let types = model.type_registry();

    let mut openapi = openapiv3::OpenAPI::default();

    openapi.openapi = "3.1.0".into();

    openapi.info = openapiv3::Info {
        title: "Elasticsearch API".to_string(),
        description: None,
        terms_of_service: None,
        contact: None,
        license: license(&model),
        version: "".to_string(),
        extensions: Default::default(),
    };

    // Endpoints
    let paths = paths::build_paths(&model.endpoints, &types)?;

    openapi.paths = openapiv3::Paths {
        paths: paths,
        extensions: Default::default(),
    };

    // Types
    let components = openapiv3::Components {
        security_schemes: Default::default(),
        responses: Default::default(),
        parameters: Default::default(),
        examples: Default::default(),
        request_bodies: Default::default(),
        headers: Default::default(),
        schemas: Default::default(),
        links: Default::default(),
        callbacks: Default::default(),
        extensions: Default::default(),
    };

    openapi.components = Some(components);

    serde_json::to_writer_pretty(out, &openapi)?;
    Ok(())
}

fn license(model: &Model) -> Option<openapiv3::License> {
    if let Some(info) = &model.info {
        Some(openapiv3::License {
            name: info.license.name.clone(),
            url: Some(info.license.url.clone()),
            extensions: Default::default(),
        })
    } else {
        None
    }
}
