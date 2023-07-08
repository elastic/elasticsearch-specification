mod paths;
mod schemas;
mod components;

use std::io::Write;
use std::path::Path;
use openapiv3::{Components, OpenAPI};

use clients_schema::{Endpoint, Model};
use crate::components::TypesAndComponents;

pub fn convert_schema_file(path: impl AsRef<Path>, endpoint_filter: fn(e: &Endpoint) -> bool, out: impl Write) -> anyhow::Result<()> {
    let file = std::fs::File::open(path)?;
    let model: Model = serde_json::from_reader(file)?;

    let openapi = convert_schema(&model, endpoint_filter)?;

    serde_json::to_writer_pretty(out, &openapi)?;
    Ok(())
}

pub fn convert_schema(model: &Model, endpoint_filter: fn(e: &Endpoint) -> bool) -> anyhow::Result<OpenAPI> {

    let mut openapi = OpenAPI {
        openapi: "3.0.3".into(),
        info: info(model),
        servers: vec![],
        paths: Default::default(),
        components: Some(Components {
            security_schemes: Default::default(),
            // Filled from endpoints
            responses: Default::default(),
            // Filled from endpoints
            // TODO: add common request parameters and common cat parameters?
            parameters: Default::default(),
            examples: Default::default(),
            // Filled from endpoints
            request_bodies: Default::default(),
            headers: Default::default(),
            // Filled with type definitions
            schemas: Default::default(),
            links: Default::default(),
            callbacks: Default::default(),
            extensions: Default::default(),
        }),
        security: None,
        tags: vec![],
        external_docs: None,
        extensions: Default::default(),
    };

    let mut tac = TypesAndComponents::new(&model.types, openapi.components.as_mut().unwrap());

    // Endpoints
    for endpoint in model.endpoints.iter().filter(|e| endpoint_filter(e)) {
        paths::add_endpoint(endpoint, &mut tac, &mut openapi.paths)?;
    }
    //let paths = paths::build_paths(model.endpoints, &types)?;

    //openapi.paths = openapiv3::Paths {
    //    paths: paths,
    //    extensions: Default::default(),
    //};

    Ok(openapi)
}

fn info(model: &Model) -> openapiv3::Info {
    let (title, license) = if let Some(info) = &model.info {
        (
            info.title.clone(),
            Some(openapiv3::License {
                name: info.license.name.clone(),
                url: Some(info.license.url.clone()),
                extensions: Default::default(),
            })
        )
    } else {
        ("".to_string(), None)
    };

    openapiv3::Info {
        title,
        description: None,
        terms_of_service: None,
        contact: None,
        license,
        version: "".to_string(), // TODO
        extensions: Default::default(),
    }
}
