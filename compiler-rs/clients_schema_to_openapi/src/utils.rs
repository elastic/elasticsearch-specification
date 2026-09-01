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

use clients_schema::TypeName;
use openapiv3::{ObjectType, ReferenceOr, Schema, SchemaData, SchemaKind, StringType, Type};

use crate::components::TypesAndComponents;

/// Extensions to `ReferenceOr` to ease conversion to boxed versions.
pub trait ReferenceOrBoxed<T> {
    fn boxed(self) -> ReferenceOr<Box<T>>;
}

impl<T> ReferenceOrBoxed<T> for ReferenceOr<T> {
    fn boxed(self) -> ReferenceOr<Box<T>> {
        match self {
            ReferenceOr::Item(t) => ReferenceOr::Item(Box::new(t)),
            ReferenceOr::Reference { reference } => ReferenceOr::Reference { reference },
        }
    }
}

/// Extension to `TypeName` to return its name as an OpenAPI schema
pub trait SchemaName {
    /// Name in the `#/components/schema` section
    fn schema_name(&self) -> String;
    /// Full reference
    fn schema_ref(&self) -> ReferenceOr<Schema>;
}

impl SchemaName for TypeName {
    // Use '.' as the separator: names and paths must be RFC 3986 compliant,
    // and ':' output by `TypeName.toString()` is a reserved character.
    fn schema_name(&self) -> String {
        format!("{}.{}", self.namespace, self.name)
    }

    fn schema_ref(&self) -> ReferenceOr<Schema> {
        ReferenceOr::Reference {
            reference: format!("#/components/schemas/{}.{}", self.namespace, self.name),
        }
    }
}

/// Convenience extensions to turn OpenAPI type declarations into a `ReferenceOr<Schema>`.
/// This avoids a lot of boiler plate when creating schema objects.
pub trait IntoSchema {
    fn into_schema_ref(self) -> ReferenceOr<Schema>
    where Self: Sized {
        ReferenceOr::Item(self.into_schema())
    }

    // fn into_schema_ref_with_base(self, base: &clients_schema::BaseType) -> ReferenceOr<Schema> where Self: Sized {
    //     let mut result = self.into_schema_ref();
    //     if let ReferenceOr::Item(ref mut schema) = &mut result {
    //         crate::schemas::fill_data_with_base(&mut schema.schema_data, base);
    //     }
    //     result
    // }

    fn into_schema_ref_with_data_fn(self, f: fn(&mut SchemaData) -> ()) -> ReferenceOr<Schema>
    where Self: Sized {
        let mut result = self.into_schema_ref();
        if let ReferenceOr::Item(ref mut schema) = &mut result {
            f(&mut schema.schema_data);
        }
        result
    }

    fn into_schema_with_base(self, tac: &TypesAndComponents, base: &clients_schema::BaseType) -> Schema
    where Self: Sized {
        let mut schema = self.into_schema();
        tac.fill_data_with_base(&mut schema.schema_data, base);
        schema
    }

    fn into_schema(self) -> Schema;
}

impl IntoSchema for Schema {
    fn into_schema(self) -> Schema {
        self
    }
}

impl IntoSchema for ReferenceOr<Schema> {
    fn into_schema_ref(self) -> ReferenceOr<Schema>
    where Self: Sized {
        self
    }

    fn into_schema(self) -> Schema {
        match self {
            ReferenceOr::Item(schema) => schema,
            ReferenceOr::Reference { .. } => SchemaKind::AllOf { all_of: vec![self] }.into_schema(),
        }
    }
}

impl IntoSchema for SchemaKind {
    fn into_schema(self) -> Schema {
        Schema {
            schema_data: Default::default(),
            schema_kind: self,
        }
    }
}

impl IntoSchema for Type {
    fn into_schema(self) -> Schema {
        Schema {
            schema_kind: SchemaKind::Type(self),
            schema_data: Default::default(),
        }
    }
}

impl IntoSchema for ObjectType {
    fn into_schema(self) -> Schema {
        Schema {
            schema_kind: SchemaKind::Type(Type::Object(self)),
            schema_data: Default::default(),
        }
    }
}

impl IntoSchema for StringType {
    fn into_schema(self) -> Schema {
        Schema {
            schema_kind: SchemaKind::Type(Type::String(self)),
            schema_data: Default::default(),
        }
    }
}
