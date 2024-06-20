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

use crate::TypeName;
use crate::type_name;

macro_rules! declare_type_name {
    ($id:ident,$namespace:expr,$name:expr) => {
        pub const $id: TypeName = type_name!($namespace, $name);
    };
}

declare_type_name!(STRING, "_builtins", "string");
declare_type_name!(BOOLEAN, "_builtins", "boolean");
declare_type_name!(OBJECT, "_builtins", "object");
declare_type_name!(BINARY, "_builtins", "binary");
declare_type_name!(VOID, "_builtins", "void");
declare_type_name!(NUMBER, "_builtins", "number");
declare_type_name!(BYTE, "_builtins", "byte");
declare_type_name!(INTEGER, "_builtins", "integer");
declare_type_name!(LONG, "_builtins", "long");
declare_type_name!(FLOAT, "_builtins", "float");
declare_type_name!(DOUBLE, "_builtins", "double");
declare_type_name!(NULL, "_builtins", "null");
declare_type_name!(DICTIONARY, "_builtins", "Dictionary");
declare_type_name!(USER_DEFINED, "_builtins", "UserDefined");

declare_type_name!(ADDITIONAL_PROPERTIES, "_spec_utils", "AdditionalProperties");

declare_type_name!(WITH_NULL_VALUE, "_spec_utils", "WithNullValue");
