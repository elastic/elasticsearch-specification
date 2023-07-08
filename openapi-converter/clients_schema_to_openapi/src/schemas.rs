use anyhow::bail;
use indexmap::IndexMap;
use openapiv3::{AdditionalProperties, ArrayType, Discriminator, ExternalDocumentation, NumberType, ObjectType, ReferenceOr, Schema, SchemaData, SchemaKind, StringType, Type};
use clients_schema::{Body, Enum, Interface, LiteralValueValue, PropertiesBody, Property, Request, Response, TypeAlias, TypeAliasVariants, TypeDefinition, TypeName, ValueOf};

use crate::components::TypesAndComponents;

// A placeholder in components.schema to handle recursive types
const SCHEMA_PLACEHOLDER: ReferenceOr<Schema> = ReferenceOr::Reference {
    reference: String::new()
};

pub trait ReferenceOrBoxed<T> {
    fn boxed(self) -> ReferenceOr<Box<T>>;
}

impl <T> ReferenceOrBoxed<T> for ReferenceOr<T> {
    fn boxed(self) -> ReferenceOr<Box<T>> {
        match self {
            ReferenceOr::Item(t) => ReferenceOr::Item(Box::new(t)),
            ReferenceOr::Reference { reference } => ReferenceOr::Reference { reference },
        }
    }
}

pub trait SchemaName {
    fn schema_name(&self) -> String;
    fn schema_ref(&self) -> ReferenceOr<Schema>;
}

impl SchemaName for TypeName {
    fn schema_name(&self) -> String {
        format!("{}", self)
    }

    fn schema_ref(&self) -> ReferenceOr<Schema> {
        ReferenceOr::Reference {
            reference: format!("#/components/schemas/{}", self)
        }
    }
}

pub trait IntoSchema {
    fn into_schema(self) -> ReferenceOr<Schema>;
    fn into_schema_with_base(self, base: &clients_schema::BaseType) -> ReferenceOr<Schema> where Self: Sized {
        let mut result = self.into_schema();
        if let ReferenceOr::Item(ref mut schema) = &mut result {
            fill_data_with_base(&mut schema.schema_data, base);
        }
        result
    }

    fn into_schema_with_data_fn(self, f: fn (&mut SchemaData) -> ()) -> ReferenceOr<Schema> where Self: Sized {
        let mut result = self.into_schema();
        if let ReferenceOr::Item(ref mut schema) = &mut result {
            f(&mut schema.schema_data);
        }
        result
    }
}

impl IntoSchema for SchemaKind {
    fn into_schema(self) -> ReferenceOr<Schema> {
        ReferenceOr::Item(Schema {
            schema_data: Default::default(),
            schema_kind: self,
        })
    }
}

impl IntoSchema for Type {
    fn into_schema(self) -> ReferenceOr<Schema> {
        ReferenceOr::Item(Schema {
            schema_kind: SchemaKind::Type(self),
            schema_data: Default::default(),
        })
    }
}

impl IntoSchema for ObjectType {
    fn into_schema(self) -> ReferenceOr<Schema> {
        ReferenceOr::Item(Schema {
            schema_kind: SchemaKind::Type(Type::Object(self)),
            schema_data: Default::default(),
        })
    }
}

impl <'a> TypesAndComponents<'a> {

    pub fn convert_value_of(&mut self, value_of: &ValueOf) -> anyhow::Result<ReferenceOr<Schema>> {

        Ok(match value_of {
            //
            // Instance_of
            ValueOf::InstanceOf(instance) => {
                // Do not care about generics, we work with an expanded schema
                self.for_type_name(&instance.typ)?
            },

            //
            // Array
            ValueOf::ArrayOf(array) => {
                ReferenceOr::Item(Schema {
                    schema_data: Default::default(),
                    schema_kind: SchemaKind::Type(Type::Array(ArrayType {
                        items: Some(self.convert_value_of(&array.value)?.boxed()),
                        min_items: None,
                        max_items: None,
                        unique_items: false,
                    }))
                })
            },

            //
            // Union
            ValueOf::UnionOf(union) => {
                let mut items = Vec::new();
                for item in &union.items {
                    items.push(self.convert_value_of(item)?)
                }

                ReferenceOr::Item(Schema {
                    schema_data: Default::default(),
                    schema_kind: SchemaKind::OneOf {
                        one_of: items,
                    }
                })
            },

            //
            // Dictionary
            // See https://swagger.io/docs/specification/data-models/dictionaries/
            ValueOf::DictionaryOf(dict) => {
                ObjectType {
                    properties: Default::default(),
                    required: vec![],
                    additional_properties: Some(AdditionalProperties::Schema(Box::new(self.convert_value_of(&dict.value)?))),
                    // Single key dictionaries have exactly one property
                    min_properties: if dict.single_key { Some(1) } else { None },
                    max_properties: if dict.single_key { Some(1) } else { None },
                }.into_schema()
            },

            //
            // User defined value
            ValueOf::UserDefinedValue(_) => {
                ReferenceOr::Item(Schema {
                    schema_data: Default::default(),
                    // FIXME: not the right way to represent an arbitrary value
                    schema_kind: SchemaKind::Type(Type::Object(ObjectType::default()))
                })
            },

            //
            // Literal value
            ValueOf::LiteralValue(literal) => {
                let str_value = match &literal.value {
                    LiteralValueValue::String(s) => s.clone(),
                    LiteralValueValue::Number(n) => n.to_string(),
                    LiteralValueValue::Boolean(b) => b.to_string(),
                };

                ReferenceOr::Item(Schema {
                    // Note: the enclosing property will add "required: true"
                    schema_data: Default::default(),
                    schema_kind: SchemaKind::Type(Type::String(StringType {
                        format: Default::default(),
                        pattern: None,
                        enumeration: vec![Some(str_value)],
                        min_length: None,
                        max_length: None,
                    })),
                })
            }
        })
    }

    //
    // Return the reference for a type name, registering it if needed
    //
    pub fn for_type_name(&mut self, type_name: &TypeName) -> anyhow::Result<ReferenceOr<Schema>> {
        let schema_name = type_name.schema_name();

        if self.components.schemas.contains_key(&schema_name) {
            // Has already been processed
            return Ok(type_name.schema_ref());
        }

        // Builtin types
        if type_name.namespace == "_builtins" {
            return match type_name.name.as_str() {
                "string" => {
                    Ok(Type::String(StringType {
                        format: Default::default(),
                        pattern: None,
                        enumeration: vec![],
                        min_length: None,
                        max_length: None,
                    }).into_schema())
                },
                "boolean" => {
                    Ok(Type::Boolean {}.into_schema())
                },
                "number" => {
                    Ok(Type::Number(NumberType::default()).into_schema())
                },
                "void" => {
                    // Empty object
                    Ok(ObjectType::default().into_schema())
                },
                "null" => {
                    // Note that there is no null type; instead, the nullable attribute is used as a modifier of the base type.
                    // https://swagger.io/docs/specification/data-models/data-types/
                    // FIXME: null should be handled in unions by setting "nullable" to the resulting schema

                    Ok(Type::String(StringType {
                        format: Default::default(),
                        pattern: None,
                        enumeration: vec![],
                        min_length: None,
                        max_length: None,
                    }).into_schema_with_data_fn(|data| { data.nullable = true; }))
                }
                _ => bail!("unknown builtin type: {}", type_name),
            }
        }

        if type_name.namespace == "_types" {
            match type_name.name.as_str() {
                "double" | "long" | "integer" | "float" => {
                    return Ok(Type::Number(NumberType::default()).into_schema());
                },
                _ => {},
            }
        }

        // Store a placeholder, it will avoid infinite loops with recursive types
        self.components.schemas.insert(schema_name, SCHEMA_PLACEHOLDER);

        let typedef = self.types.get(type_name)?;
        use TypeDefinition::*;
        let schema = match typedef {
            // Request and response may not have a body (and a schema) and so have dedicated methods below
            Request(_) => bail!("Requests should be handled using for_request"),
            Response(_) => bail!("Responses should be handled using for_request"),

            Enum(enumm) =>  self.convert_enum(enumm)?,
            Interface(itf) => self.convert_interface_definition(itf)?,
            TypeAlias(alias) => self.convert_type_alias(alias)?,
        };

        Ok(self.add_schema(type_name, schema))
    }

    // Returns the schema, if any, for a request body
    pub fn convert_request(&mut self, request: &Request) -> anyhow::Result<Option<ReferenceOr<Schema>>> {
        self.for_body(&request.body)
    }

    pub fn convert_response(&mut self, response: &Response) -> anyhow::Result<Option<ReferenceOr<Schema>>> {
        self.for_body(&response.body)
    }

    fn for_body(&mut self, body: &Body) -> anyhow::Result<Option<ReferenceOr<Schema>>> {

        let result = match body {
            Body::NoBody(_) => None,
            Body::Value(value_body) => Some(self.convert_value_of(&value_body.value)?), // TODO codegen_name?
            Body::Properties(PropertiesBody { properties }) =>  {
                Some(ObjectType {
                    properties: self.convert_properties(properties.iter())?,
                    required: self.required_properties(properties.iter()),
                    additional_properties: None,
                    min_properties: None,
                    max_properties: None,
                }.into_schema())
            }
        };

        Ok(result)
    }

    fn convert_property(&mut self, prop: &Property) -> anyhow::Result<ReferenceOr<Schema>> {
        let mut result = self.convert_value_of(&prop.typ)?;
        if let ReferenceOr::Item(ref mut schema) = &mut result {
            fill_data_with_prop(&mut schema.schema_data, prop);
        }
        Ok(result)
    }

    fn convert_properties<'b> (&mut self, props: impl Iterator<Item = &'b Property>) -> anyhow::Result<IndexMap<String, ReferenceOr<Box<Schema>>>> {
        let mut result = IndexMap::new();
        for prop in props {
            result.insert(prop.name.clone(), self.convert_property(prop)?.boxed());
        }
        Ok(result)
    }

    fn required_properties<'b> (&mut self, props: impl Iterator<Item = &'b Property>) -> Vec<String> {
        props.filter_map(|prop| prop.required.then(|| prop.name.clone())).collect()
    }

    //
    // Register an interface definition and return the schema reference.
    //
    fn convert_interface_definition(&mut self, itf: &Interface) -> anyhow::Result<ReferenceOr<Schema>> {

        let mut schema = if let Some(container) = &itf.variants {
            // TODO: interface definition container.non_exhaustive
            let _non_exhaustive = container.non_exhaustive;

            // Split container properties and variants
            let container_props = itf.properties.iter().filter(|p| p.container_property).collect::<Vec<_>>();
            let variant_props = itf.properties.iter().filter(|p| !p.container_property).collect::<Vec<_>>();

            // A container is represented by an object will all optional properties and exactly one that
            // needs to be set.
            let mut schema = ObjectType {
                properties: self.convert_properties(variant_props.iter().map(|p| *p))?,
                required: vec![],
                additional_properties: None,
                min_properties: Some(1),
                max_properties: Some(1),
            }.into_schema();

            if !container_props.is_empty() {
                // Create a schema for the container property, and group it in an "allOf" with variants
                let container_props_schema = ObjectType {
                    properties: self.convert_properties(container_props.iter().map(|p| *p))?,
                    required: self.required_properties(container_props.iter().map(|p| *p)),
                    additional_properties: None,
                    min_properties: None,
                    max_properties: None,
                }.into_schema();

                schema = SchemaKind::AllOf {
                    all_of: vec![container_props_schema, schema],
                }.into_schema();
            }

            fill_schema_with_base(&mut schema, &itf.base);
            schema

        } else {
            let schema = ObjectType {
                properties: self.convert_properties(itf.properties.iter())?,
                required: self.required_properties(itf.properties.iter()),
                additional_properties: None,
                min_properties: None,
                max_properties: None,
            }.into_schema();

            schema
        };

        // Inheritance
        if let Some(inherit) = &itf.inherits {
            schema = SchemaKind::AllOf {
                all_of: vec![self.for_type_name(&inherit.typ)?, schema],
            }.into_schema();
        }

        // Behaviors
        for bh in &itf.implements {
            match bh.typ.name.as_str() {
                name @ ("AdditionalProperty" | "AdditionalProperties") => {
                    let single = name == "AdditionalProperty";
                    let value_schema = self.convert_value_of(&bh.generics[1])?;

                    schema = ObjectType {
                        properties: Default::default(),
                        required: vec![],
                        additional_properties: Some(AdditionalProperties::Schema(Box::new(value_schema))),
                        min_properties: if single { Some(1) } else { None },
                        max_properties: if single { Some(1) } else { None },
                    }.into_schema();
                }
                _ => bail!("Unknown behavior {}", &bh.typ)
            }
        }
        Ok(schema)
        // FIXME: implements
    }

    //
    // Register a type alias and return the schema reference.
    //
    fn convert_type_alias(&mut self, alias: &TypeAlias) -> anyhow::Result<ReferenceOr<Schema>> {

        let mut schema = self.convert_value_of(&alias.typ)?;

        // Add docs, etc.
        if let ReferenceOr::Item(ref mut schema) = &mut schema {
            schema.schema_data = convert_base_type(&alias.base);
        }

        match &alias.variants {
            None => {},
            Some(TypeAliasVariants::ExternalTag(_tag)) => {
                // TODO: typed-keys: add an extension to identify it?
            },
            Some(TypeAliasVariants::InternalTag(tag)) => {
                if let ReferenceOr::Item(ref mut schema) = &mut schema {
                    // TODO: add tag.default_tag as an extension
                    schema.schema_data.discriminator = Some(Discriminator {
                        property_name: tag.tag.clone(),
                        mapping: Default::default(),
                        extensions: Default::default(),
                    });
                }
            },
        };

        Ok(schema)
    }

    //
    // Register an enumeration and return the schema reference.
    //
    fn convert_enum(&mut self, enumm: &Enum) -> anyhow::Result<ReferenceOr<Schema>> {

        // TODO: enum.is_open

        let enum_values = enumm.members.iter().map(|m| {
            Some(m.name.clone())
        }).collect::<Vec<_>>();

        let schema = ReferenceOr::Item(Schema {
            schema_data: convert_base_type(&enumm.base),
            schema_kind: SchemaKind::Type(Type::String(StringType {
                format: Default::default(),
                pattern: None,
                enumeration: enum_values,
                min_length: None,
                max_length: None,
            })),
        });

        Ok(schema)
    }
}

//
// Convert common type information.
//
fn convert_base_type(base: &clients_schema::BaseType) -> SchemaData {
    let mut result = SchemaData::default();
    fill_data_with_base(&mut result, base);
    return result;
}

fn fill_schema_with_base(schema: &mut ReferenceOr<Schema>, base: &clients_schema::BaseType) {
    if let ReferenceOr::Item(ref mut schema) = schema {
        fill_data_with_base(&mut schema.schema_data, base);
    }
}

fn fill_data_with_base(data: &mut SchemaData, base: &clients_schema::BaseType) {
    // SchemaData {
    //     nullable: false,
    //     read_only: false,
    //     write_only: false,
    //     deprecated: false,
    //     external_docs: Default::default(),
    //     example: None,
    //     title: None,
    //     description: base.description.clone(),
    //     discriminator: None,
    //     default: None,
    //     extensions: Default::default(),
    // }

    let external_docs = base.doc_url.as_ref().map(|url| ExternalDocumentation {
        description: None,
        url: url.clone(),
        extensions: Default::default(),
    });

    data.external_docs = external_docs;
    data.deprecated = base.deprecation.is_some();
    data.description = base.description.clone();
    // TODO: base.deprecation as extension
    // TODO: base.spec_location as extension?
    // TODO: base.doc_id as extension
    // TODO: base.variant_name as extension? (used for external_variants)
    // TODO: base.codegen_names as extension?
}

fn fill_data_with_prop(data: &mut SchemaData, prop: &Property) {
    let external_docs = prop.doc_url.as_ref().map(|url| ExternalDocumentation {
        description: None,
        url: url.clone(),
        extensions: Default::default(),
    });
    data.external_docs = external_docs;
    data.deprecated = prop.deprecation.is_some();
    data.description = prop.description.clone();
    // TODO: prop.aliases as extensions
    // TODO: prop.server_default as extension
    // TODO: prop.availability as extension
    // TODO: prop.doc_id as extension (new representation of since and stability)
    // TODO: prop.es_quirk as extension?
    // TODO: prop.codegen_name as extension?
    // TODO: prop.deprecation as extension
}

