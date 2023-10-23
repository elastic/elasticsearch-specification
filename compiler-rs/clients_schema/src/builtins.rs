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
use once_cell::sync::Lazy;

pub static STRING:  Lazy<TypeName> = Lazy::new(|| TypeName::new("_builtins", "string"));
pub static BOOLEAN: Lazy<TypeName> = Lazy::new(|| TypeName::new("_builtins", "boolean"));
pub static OBJECT:  Lazy<TypeName> = Lazy::new(|| TypeName::new("_builtins", "object"));
pub static BINARY:  Lazy<TypeName> = Lazy::new(|| TypeName::new("_builtins", "binary"));
pub static VOID:    Lazy<TypeName> = Lazy::new(|| TypeName::new("_builtins", "void"));
pub static NUMBER:  Lazy<TypeName> = Lazy::new(|| TypeName::new("_builtins", "number"));
pub static BYTE:    Lazy<TypeName> = Lazy::new(|| TypeName::new("_builtins", "byte"));
pub static INTEGER: Lazy<TypeName> = Lazy::new(|| TypeName::new("_builtins", "integer"));
pub static LONG:    Lazy<TypeName> = Lazy::new(|| TypeName::new("_builtins", "long"));
pub static FLOAT:   Lazy<TypeName> = Lazy::new(|| TypeName::new("_builtins", "float"));
pub static DOUBLE:  Lazy<TypeName> = Lazy::new(|| TypeName::new("_builtins", "double"));
pub static NULL:  Lazy<TypeName> = Lazy::new(|| TypeName::new("_builtins", "null"));
pub static DICTIONARY: Lazy<TypeName> = Lazy::new(|| TypeName::new("_builtins", "Dictionary"));
pub static USER_DEFINED: Lazy<TypeName> = Lazy::new(|| TypeName::new("_builtins", "UserDefined"));

pub static ADDITIONAL_PROPERTIES: Lazy<TypeName> = Lazy::new(|| TypeName::new("_spec_utils", "AdditionalProperties"));
