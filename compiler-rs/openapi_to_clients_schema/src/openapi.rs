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

//! OpenAPI schema utilities

use std::fmt::Debug;
use openapiv3::*;
use std::ops::Deref;
use anyhow::{anyhow, bail};
use serde_json::Value as JsonValue;
use tracing::info;

/// A wrapper around an openapi schema, also providing helper methods to explore it.
pub struct OpenAPI(pub openapiv3::OpenAPI);

impl Deref for OpenAPI {
    type Target = openapiv3::OpenAPI;

    fn deref(&self) -> &Self::Target {
        &self.0
    }
}

impl OpenAPI {

    ///
    /// Get the schema for a reference, if it exists, and follows references until we find a schema
    ///
    pub fn ref_to_schema(&self, reference: &str) -> anyhow::Result<&Schema> {

        if let Some(name) = reference.strip_prefix("#/components/schemas/") {
            match self.components.as_ref().unwrap().schemas.get(name) {
                Some(ReferenceOr::Item(sch)) => return Ok(sch),
                Some(ReferenceOr::Reference { reference }) => return self.ref_to_schema(reference),
                _ => {},
            }
        }

        bail!("No schema definition found for {reference}")
    }

    ///
    /// Get the schema for a reference or schema
    ///
    pub fn get_schema<'a>(&'a self, r_or_s: &'a ReferenceOr<Schema>) -> anyhow::Result<&'a Schema> {
        match r_or_s {
            ReferenceOr::Reference { reference } => self.ref_to_schema(&reference),
            ReferenceOr::Item(schema) => Ok(&schema),
        }
    }

    ///
    /// Is this type nullable?
    ///
    pub fn is_nullable(&self, id: &str) -> bool {
        self.components
            .as_ref()
            .and_then(|c| c.schemas.get(id))
            .map(|s| match s {
                ReferenceOr::Reference { reference: _r } => false,
                ReferenceOr::Item(item) => item.schema_data.nullable
            })
            .unwrap_or_default()
    }

    ///
    /// Is this a `not` schema?
    ///
    pub fn is_not(&self, r_or_s: &ReferenceOr<Schema>) -> bool {
        if let Ok(schema) = self.get_schema(r_or_s) {
            if let SchemaKind::Not {..} = schema.schema_kind {
                return true;
            }
        }
        false
    }

    ///
    /// Merge a series of schemas and return a single combined schema that is guaranteed to not be an `Any`.
    /// Used to resolve `allOf` directives.
    ///
    pub fn merge_schemas(&self, schemas: &Vec<ReferenceOr<Schema>>, data: &SchemaData) -> anyhow::Result<Schema> {
        let mut merged = AnySchema::default();
        for schema in schemas {
            merged = self.merge_in_any(merged, schema)?;
        }

        Ok(Schema {
            schema_data: data.clone(),
            schema_kind: any_to_schema(merged)?,
        })
    }

    fn merge_in_any(&self, acc: AnySchema, schema: &ReferenceOr<Schema>) -> anyhow::Result<AnySchema> {

        let schema = self.get_schema(schema)?;

        match &schema.schema_kind {
            SchemaKind::AllOf { all_of } | SchemaKind::Any(AnySchema{ all_of, .. }) if !all_of.is_empty() => {
                let mut result = acc;
                for schema in all_of {
                    result = self.merge_in_any(result, &schema)?;
                }
                return Ok(result);
            },
            _ => {},
        }

        let schema = schema_to_any(&schema.schema_kind)?;

        let result = AnySchema {
            typ: merge_option(acc.typ, schema.typ)?,

            any_of: merge_vec(acc.any_of, schema.any_of),
            one_of: merge_vec(acc.one_of, schema.one_of),
            all_of: merge_vec(acc.all_of, schema.all_of),
            not: merge_option(acc.not, schema.not)?,

            // Structure properties
            additional_properties: merge_option(acc.additional_properties, schema.additional_properties)?,
            items: merge_option(acc.items, schema.items)?,

            unique_items: merge_option(acc.unique_items, schema.unique_items)?,
            properties: Default::default(),
            max_properties: merge_option(acc.max_properties, schema.max_properties)?,
            min_properties: merge_option(acc.min_properties, schema.min_properties)?,

            // Scalar properties
            required: merge_vec(acc.required, schema.required),
            format: merge_option(acc.format, schema.format)?,
            exclusive_maximum: merge_option(acc.exclusive_maximum, schema.exclusive_maximum)?,
            exclusive_minimum: merge_option(acc.exclusive_minimum, schema.exclusive_minimum)?,

            maximum: merge_option(acc.maximum, schema.maximum)?,
            max_items: merge_option(acc.max_items, schema.max_items)?,
            max_length: merge_option(acc.max_length, schema.max_length)?,

            minimum: merge_option(acc.minimum, schema.minimum)?,
            min_items: merge_option(acc.min_items, schema.min_items)?,
            min_length: merge_option(acc.min_length, schema.min_length)?,

            pattern: merge_option(acc.pattern, schema.pattern)?,
            multiple_of: merge_option(acc.multiple_of, schema.multiple_of)?,
            enumeration: merge_vec(acc.enumeration, schema.enumeration),
        };

        Ok(result)
    }
}

///
/// Converts a schema to the "any" form that has all properties of an OpenAPI schema.
/// Used for schema merging operations
///
pub fn schema_to_any(schema: &SchemaKind) -> anyhow::Result<AnySchema> {
    // TODO: could return Cow<AnySchema> to reduce cloning

    match schema {
        SchemaKind::Type(typ) => match typ {
            Type::String(x) => Ok(AnySchema {
                typ: Some("string".into()),
                format: format_to_string(&x.format),
                pattern: x.pattern.clone(),
                enumeration: x.enumeration.iter()
                    // turn Vec<Option<String>> into Vec<Value::String>
                    .filter_map(|e| e.as_ref().map(|s| JsonValue::String(s.clone())))
                    .collect(),
                max_length: x.max_length,
                min_length: x.min_length,
                ..AnySchema::default()
            }),
            Type::Number(x) => Ok(AnySchema {
                typ: Some("number".into()),
                format: format_to_string(&x.format),
                multiple_of: x.multiple_of,
                exclusive_minimum: Some(x.exclusive_minimum),
                exclusive_maximum: Some(x.exclusive_maximum),
                minimum: x.minimum,
                maximum: x.maximum,
                enumeration: x.enumeration.iter()
                    .filter_map(|e| *e)
                    .filter_map(|s| serde_json::Number::from_f64(s))
                    .map(|s| JsonValue::Number(s))
                    .collect(),
                ..AnySchema::default()
            }),
            Type::Integer(x) => Ok(AnySchema {
                typ: Some("integer".into()),
                format: format_to_string(&x.format),
                multiple_of: x.multiple_of.map(|x| x as f64),
                exclusive_minimum: Some(x.exclusive_minimum),
                exclusive_maximum: Some(x.exclusive_maximum),
                minimum: x.minimum.map(|x| x as f64),
                maximum: x.maximum.map(|x| x as f64),
                enumeration: x.enumeration.iter()
                    .filter_map(|e| *e)
                    .map(|s| JsonValue::Number(s.into()))
                    .collect(),
                ..AnySchema::default()
            }),
            Type::Object(x) => Ok(AnySchema {
                typ: Some("object".into()),
                properties: x.properties.clone(),
                required: x.required.clone(),
                additional_properties: x.additional_properties.clone(),
                min_properties: x.min_properties,
                max_properties: x.max_properties,
                ..AnySchema::default()
            }),
            Type::Array(x) => Ok(AnySchema {
                typ: Some("array".into()),
                items: x.items.clone(),
                min_items: x.min_items,
                max_items: x.max_items,
                unique_items: Some(x.unique_items),
                ..AnySchema::default()
            }),
            Type::Boolean { .. } => Ok(AnySchema {
                typ: Some("boolean".into()),
                ..AnySchema::default()
            }),
        }

        SchemaKind::OneOf { one_of } => Ok(AnySchema {
            one_of: one_of.clone(),
            ..AnySchema::default()
        }),

        SchemaKind::AllOf { all_of } => Ok(AnySchema {
            all_of: all_of.clone(),
            ..AnySchema::default()
        }),

        SchemaKind::AnyOf { any_of } => Ok(AnySchema {
            any_of: any_of.clone(),
            ..AnySchema::default()
        }),

        SchemaKind::Not { not } => Ok(AnySchema {
            not: Some(not.clone()),
            ..AnySchema::default()
        }),

        SchemaKind::Any(any) => Ok(any.clone()),
    }
}


///
/// Concatenates two vectors and returns the resulting vector
///
fn merge_vec<T>(mut vec1: Vec<T>, mut vec2: Vec<T>) -> Vec<T> {
    vec1.append(&mut vec2);
    vec1
}

///
/// Merge two options. Fails if both options are set and have different values.
///
fn merge_option<T: Debug + PartialEq>(opt1: Option<T>, opt2: Option<T>) -> anyhow::Result<Option<T>> {
    match (&opt1, &opt2) {
        (Some(v1), Some(v2)) if v1 == v2 => bail!("Merge conflict: {opt1:?} and {opt2:?}"),
        _ => Ok(opt1.or(opt2))
    }
}

pub fn any_to_schema(any: AnySchema) -> anyhow::Result<SchemaKind> {

    // TODO: SchemaData.default could be used for disambiguation
    let typ: Option<&str> = if let Some(typ) = &any.typ {
        Some(typ)
    } else if any.additional_properties.is_some() ||
            !any.properties.is_empty() ||
            !any.required.is_empty() {
            Some("object")
    } else if let Some(JsonValue::String(_)) = any.enumeration.get(0) {
        Some("string")
    } else {
        // TODO: add more heuristics
        None
    };

    let typ = typ.ok_or_else(|| anyhow!("Cannot infer schema type in {:?}", any))?;

    match typ {

        "object" => Ok(SchemaKind::Type(Type::Object(ObjectType {
            properties: any.properties,
            required: any.required,
            additional_properties: any.additional_properties,
            min_properties: any.min_properties,
            max_properties: any.max_properties,
        }))),

        "string" => Ok(SchemaKind::Type(Type::String(StringType {
            format: as_unknown_or_empty(any.format),
            pattern: any.pattern,
            enumeration: any.enumeration.iter()
                .map(|v| if let JsonValue::String(s) = v { Some(s.clone()) } else { None })
                .collect(),
            min_length: any.min_length,
            max_length: any.max_length,
        }))),

        "integer" => Ok(SchemaKind::Type(Type::Integer(IntegerType {
            format: as_unknown_or_empty(any.format),
            multiple_of: any.multiple_of.map(|f| f as i64),
            exclusive_minimum: any.exclusive_minimum.unwrap_or(false),
            exclusive_maximum: any.exclusive_maximum.unwrap_or(false),
            minimum: any.minimum.map(|f| f as i64),
            maximum: any.maximum.map(|f| f as i64),
            enumeration: vec![], // TODO: not supported in schema.json
        }))),

        "number" => Ok(SchemaKind::Type(Type::Number(NumberType {
            format: as_unknown_or_empty(any.format),
            multiple_of: any.multiple_of,
            exclusive_minimum: any.exclusive_minimum.unwrap_or(false),
            exclusive_maximum: any.exclusive_maximum.unwrap_or(false),
            minimum: any.minimum,
            maximum: any.maximum,
            enumeration: vec![], // TODO: not supported in schema.json
        }))),

        "boolean" => Ok(SchemaKind::Type(Type::Boolean {
        })),

        "array" => Ok(SchemaKind::Type(Type::Array(ArrayType {
            items: any.items,
            min_items: any.min_items,
            max_items: any.max_items,
            unique_items: any.unique_items.unwrap_or(false),
        }))),

        _ => bail!("Unknown type {typ} in {any:?}"),
    }
}

fn as_unknown_or_empty<T>(value: Option<String>) -> VariantOrUnknownOrEmpty<T> {
    if let Some(value) = value {
        VariantOrUnknownOrEmpty::Unknown(value)
    } else {
        VariantOrUnknownOrEmpty::Empty
    }
}

fn format_to_string<T: Debug>(value: &VariantOrUnknownOrEmpty<T>) -> Option<String> {
    match value {
        VariantOrUnknownOrEmpty::Item(i) => Some(format!("{i:?}")),
        VariantOrUnknownOrEmpty::Unknown(s) => Some(s.clone()),
        VariantOrUnknownOrEmpty::Empty => None,
    }
}

/// A wrapper around either a type name reference or a type schema reference.
///
/// The `openapiv3` crate doesn't use `ReferenceOr` in a consistent way. For top-level types, is uses
/// `ReferenceOr<Schema>` whereas for deeper levels of the hierarchy it uses `ReferenceOr<Box<Schema>>` and
/// `Box<ReferenceOr<Schema>` because of the recursive nature of the type.
///
/// This makes it impractical to have functions that operate on all shapes. `RefOrSchema` solves this by holding only
/// references and providing easy conversion with `From` implementations for all variants.
///
pub enum RefOrSchema<'a> {
    Ref(&'a str),
    Schema(&'a Schema),
}

impl <'a> From<&'a ReferenceOr<Schema>> for RefOrSchema<'a> {
    fn from(value: &'a ReferenceOr<Schema>) -> Self {
        match value {
            ReferenceOr::Reference { reference } => RefOrSchema::Ref(reference),
            ReferenceOr::Item(schema) => RefOrSchema::Schema(schema),
        }
    }
}

impl <'a> From<&'a ReferenceOr<Box<Schema>>> for RefOrSchema<'a> {
    fn from(value: &'a ReferenceOr<Box<Schema>>) -> Self {
        match value {
            ReferenceOr::Reference { reference } => RefOrSchema::Ref(reference),
            ReferenceOr::Item(schema) => RefOrSchema::Schema(schema),
        }
    }
}

impl <'a> From<&'a Box<ReferenceOr<Schema>>> for RefOrSchema<'a> {
    fn from(value: &'a Box<ReferenceOr<Schema>>) -> Self {
        match value.as_ref() {
            ReferenceOr::Reference { reference } => RefOrSchema::Ref(reference),
            ReferenceOr::Item(schema) => RefOrSchema::Schema(schema),
        }
    }
}
