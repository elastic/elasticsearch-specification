use openapiv3::{Components, Parameter, ReferenceOr, RequestBody, Response, Schema, StatusCode};
use clients_schema::{TypeDefinition, TypeName, TypeRegistry};
use crate::schemas::SchemaName;

pub struct TypesAndComponents<'a> {
    pub types: TypeRegistry<'a>,
    pub components: &'a mut Components,
}

impl <'a> TypesAndComponents<'a> {
    pub fn new(types_vec: &'a Vec<TypeDefinition>, components: &'a mut Components) -> TypesAndComponents<'a> {
        TypesAndComponents {
            types: TypeRegistry::new(types_vec),
            components,
        }
    }

    pub fn add_request_body(&mut self, endpoint: &str, body: RequestBody,) -> ReferenceOr<RequestBody> {
        self.components.request_bodies.insert(endpoint.to_string(), ReferenceOr::Item(body));
        ReferenceOr::Reference {
            reference: format!("#/components/requestBodies/{}", endpoint)
        }
    }

    pub fn add_parameter(&mut self, endpoint: &str, param: Parameter) -> ReferenceOr<Parameter> {
        let result = ReferenceOr::Reference {
            reference: format!("#/components/parameters/{}#{}", endpoint, &param.parameter_data_ref().name)
        };
        self.components.parameters.insert(format!("{}#{}", endpoint, &param.parameter_data_ref().name), ReferenceOr::Item(param));
        result
    }

    pub fn add_response(&mut self, endpoint: &str, status: StatusCode, response: Response) -> ReferenceOr<Response> {
        self.components.responses.insert(format!("{}#{}", endpoint, status), ReferenceOr::Item(response));
        ReferenceOr::Reference {
            reference: format!("#/components/responses/{}#{}", endpoint, status)
        }
    }

    pub fn add_schema(&mut self, name: &TypeName, schema: ReferenceOr<Schema>) -> ReferenceOr<Schema> {
        self.components.schemas.insert(name.schema_name(), schema);
        name.schema_ref()
    }
}
