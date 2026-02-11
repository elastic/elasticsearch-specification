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

use std::fmt::{Debug, Display, Formatter};

use anyhow::anyhow;
use derive_more::From;
use indexmap::IndexMap;

// Re-export crates whose types we expose publicly
pub use ::once_cell;
pub use ::indexmap;
pub use ::anyhow;

// Child modules
pub mod builtins;
pub mod transform;

use once_cell::sync::Lazy;
use serde::de::SeqAccess;
use serde::ser::SerializeSeq;
use serde::{Deserialize, Serialize};

#[allow(clippy::trivially_copy_pass_by_ref)] // needs to match signature for use in serde attribute
#[inline]
const fn is_false(v: &bool) -> bool {
    !(*v)
}

// String type where efficient cloning brings significant improvements
// ArcStr is a compact reference counted string that makes cloning a very cheap operation.
// This is particularly important for `TypeName` that is cloned a lot, e.g. for `IndexedModel` keys
// See https://swatinem.de/blog/optimized-strings/ for a general discussion
//
// TODO: interning at deserialization time to reuse identical values (links from values to types)
type FastString = arcstr::ArcStr;

pub trait Documented {
    fn doc_url(&self) -> Option<&str>;
    fn doc_id(&self) -> Option<&str>;
    fn description(&self) -> Option<&str>;
}

pub trait ExternalDocument {
    fn ext_doc_id(&self) -> Option<&str>;
    fn ext_doc_url(&self) -> Option<&str>;
    fn ext_doc_description(&self) -> Option<&str>;
    fn ext_previous_version_doc_url(&self) -> Option<&str>;
}

#[derive(Debug, Clone, Serialize, Deserialize, PartialEq, Eq, PartialOrd, Ord, Hash)]
pub struct TypeName {
    // Order is important for Ord implementation
    pub namespace: FastString,
    pub name: FastString,
}

impl TypeName {
    pub fn new(namespace: &str, name: &str) -> TypeName {
        TypeName {
            namespace: namespace.into(),
            name: name.into(),
        }
    }

    pub fn is_builtin(&self) -> bool {
        self.namespace == "_builtins"
    }
}

/// Creates a constant `TypeName` from static strings
#[macro_export]
macro_rules! type_name {
    ($namespace:expr,$name:expr) => {
        TypeName {
            namespace: arcstr::literal!($namespace),
            name: arcstr::literal!($name),
        }
    };
}

impl Display for TypeName {
    fn fmt(&self, f: &mut Formatter<'_>) -> std::fmt::Result {
        write!(f, "{}:{}", self.namespace, self.name)
    }
}

//-----------------------------------------------------------------------------

/// Type of a value. Used both for property types and nested type definitions.
#[derive(Debug, Clone, Serialize, Deserialize, PartialEq, PartialOrd, From)]
#[serde(tag = "kind", rename_all = "snake_case")]
pub enum ValueOf {
    InstanceOf(InstanceOf),
    ArrayOf(ArrayOf),
    UnionOf(UnionOf),
    DictionaryOf(DictionaryOf),
    UserDefinedValue(UserDefinedValue),
    LiteralValue(LiteralValue),
}

impl From<TypeName> for ValueOf {
    fn from(name: TypeName) -> Self {
        ValueOf::InstanceOf(InstanceOf::new(name))
    }
}

impl From<&TypeName> for ValueOf {
    fn from(name: &TypeName) -> Self {
        ValueOf::InstanceOf(InstanceOf::new(name.clone()))
    }
}

impl From<&Lazy<TypeName>> for ValueOf {
    fn from(name: &Lazy<TypeName>) -> Self {
        ValueOf::InstanceOf(InstanceOf::new((*name).clone()))
    }
}

//-----------------------------------------------------------------------------

/// A single value
#[derive(Debug, Clone, Serialize, Deserialize, PartialEq, PartialOrd)]
pub struct InstanceOf {
    #[serde(rename = "type")]
    pub typ: TypeName,

    /// generic parameters: either concrete types or open parameters from the enclosing type
    #[serde(default, skip_serializing_if = "Vec::is_empty")]
    pub generics: Vec<ValueOf>,
}

impl InstanceOf {
    pub fn new(name: TypeName) -> InstanceOf {
        InstanceOf {
            typ: name,
            generics: Vec::default(),
        }
    }
}

/// An array
#[derive(Debug, Clone, Serialize, Deserialize, PartialEq, PartialOrd)]
pub struct ArrayOf {
    pub value: Box<ValueOf>,
}

/// One of several possible types which don't necessarily have a common superclass
#[derive(Debug, Clone, Serialize, Deserialize, PartialEq, PartialOrd)]
pub struct UnionOf {
    pub items: Vec<ValueOf>,
}

/// A dictionary (or map).  The key is a string or a number (or a union thereof), possibly through an alias.
///
/// If `singleKey` is true, then this dictionary can only have a single key. This is a common pattern in ES APIs,
/// used to associate a value to a field name or some other identifier.
#[derive(Debug, Clone, Serialize, Deserialize, PartialEq, PartialOrd)]
#[serde(rename_all = "camelCase")]
pub struct DictionaryOf {
    pub key: Box<ValueOf>,
    pub value: Box<ValueOf>,
    pub single_key: bool,
}

/// A user defined value. To be used when bubbling a generic parameter up to the top-level class is
/// inconvenient or impossible (e.g. for lists of user-defined values of possibly different types).
///
/// Clients will allow providing a serializer/deserializer when reading/writing properties of this type,
/// and should also accept raw json.
///
/// Think twice before using this as it defeats the purpose of a strongly typed API, and deserialization
/// will also require to buffer raw JSON data which may have performance implications.
#[derive(Debug, Clone, Serialize, Deserialize, PartialEq, PartialOrd)]
#[serde(rename_all = "camelCase")]
pub struct UserDefinedValue {}

/// A literal value. This is used for tagged unions, where each type member of a union has a 'type'
/// attribute that defines its kind. This metamodel heavily uses this approach with its 'kind' attributes.
///
/// It may later be used to set a property to a constant value, which is why it accepts not only strings but also
/// other primitive types.
#[derive(Debug, Clone, Serialize, Deserialize, PartialEq, PartialOrd)]
#[serde(rename_all = "camelCase")]
pub struct LiteralValue {
    pub value: LiteralValueValue,
}

impl Display for LiteralValue {
    fn fmt(&self, f: &mut Formatter<'_>) -> std::fmt::Result {
        Display::fmt(&self.value, f)
    }
}

#[derive(Debug, Clone, Serialize, Deserialize, PartialEq, PartialOrd)]
#[serde(untagged)]
pub enum LiteralValueValue {
    String(String),
    Number(f64),
    Boolean(bool),
}

impl Display for LiteralValueValue {
    fn fmt(&self, f: &mut Formatter<'_>) -> std::fmt::Result {
        match self {
            LiteralValueValue::String(x) => Display::fmt(x, f),
            LiteralValueValue::Number(x) => Display::fmt(x, f),
            LiteralValueValue::Boolean(x) => Display::fmt(x, f),
        }
    }
}

//--------------------------------------------------------------------------------------------

#[derive(Debug, Clone, PartialEq, Eq, Serialize, Deserialize)]
#[serde(rename_all = "snake_case")]
pub enum Stability {
    Stable,
    Beta,
    Experimental,
}

#[derive(Debug, Clone, PartialEq, Eq, Serialize, Deserialize)]
#[serde(rename_all = "snake_case")]
pub enum Visibility {
    Public,
    FeatureFlag,
    Private,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Deprecation {
    pub version: String,
    pub description: String,
}

/// An API flavor
#[derive(Debug, Clone, Serialize, Deserialize, Hash, PartialEq, Eq, clap::ValueEnum)]
#[serde(rename_all = "snake_case")]
pub enum Flavor {
    Stack,
    Serverless,
}

/// The availability of an item in a API flavor
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Availability {
    pub since: Option<String>,
    pub stability: Option<Stability>,
    pub visibility: Option<Visibility>,
}

/// The availability of an endpoint, field or parameter
pub type Availabilities = IndexMap<Flavor, Availability>;

pub trait AvailabilityFilter: Fn(&Option<Availabilities>) -> bool {}

impl Flavor {
    /// Predicate that indicates if a flavor is available in a given set of availabilities
    pub fn available(&self, availabilities: &Option<Availabilities>) -> bool {
        if let Some(ref avail) = availabilities {
            avail.contains_key(self)
        } else {
            // No restriction
            true
        }
    }

    /// Gets the visibility for a given set of availabilities. If the result is `None`,
    /// this flavor isn't available.
    pub fn visibility(&self, availabilities: &Option<Availabilities>) -> Option<Visibility> {
        if let Some(ref availabilities) = availabilities {
            // Some availabilities defined
            if let Some(availability) = availabilities.get(self) {
                // This one exists. Public by default
                availability.visibility.clone().or(Some(Visibility::Public))
            } else {
                // Not available
                None
            }
        } else {
            // No restriction: available and public
            Some(Visibility::Public)
        }
    }
}

/// An interface or request interface property.
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Property {
    pub name: String,

    #[serde(rename = "type")]
    pub typ: ValueOf,

    pub required: bool,

    #[serde(skip_serializing_if = "Option::is_none")]
    pub description: Option<String>,

    #[serde(skip_serializing_if = "Option::is_none")]
    pub doc_url: Option<String>,

    #[serde(skip_serializing_if = "Option::is_none")]
    pub doc_id: Option<String>,

    #[serde(skip_serializing_if = "Option::is_none")]
    pub ext_doc_url: Option<String>,

    #[serde(skip_serializing_if = "Option::is_none")]
    pub ext_doc_description: Option<String>,

    #[serde(skip_serializing_if = "Option::is_none")]
    pub ext_previous_version_doc_url: Option<String>,

    #[serde(skip_serializing_if = "Option::is_none")]
    pub ext_doc_id: Option<String>,

    #[serde(skip_serializing_if = "Option::is_none")]
    pub server_default: Option<ServerDefault>,

    #[serde(skip_serializing_if = "Option::is_none")]
    pub deprecation: Option<Deprecation>,

    #[serde(skip_serializing_if = "Option::is_none")]
    pub availability: Option<Availabilities>,

    /// If specified takes precedence over `name` when generating code. `name` is always the value
    /// to be sent over the wire
    #[serde(skip_serializing_if = "Option::is_none")]
    pub codegen_name: Option<String>,

    /// An optional set of aliases for `name`
    #[serde(default, skip_serializing_if = "Vec::is_empty")]
    pub aliases: Vec<String>,

    /// If the enclosing class is a variants container, is this a property of the container and not a variant?
    #[serde(default, skip_serializing_if = "is_false")]
    pub container_property: bool,

    /// If this property has a quirk that needs special attention, give a short explanation about it
    #[serde(skip_serializing_if = "Option::is_none")]
    pub es_quirk: Option<String>,
}

impl Documented for Property {
    fn doc_url(&self) -> Option<&str> {
        self.doc_url.as_deref()
    }

    fn doc_id(&self) -> Option<&str> {
        self.doc_id.as_deref()
    }

    fn description(&self) -> Option<&str> {
        self.description.as_deref()
    }
}

impl ExternalDocument for Property {
    fn ext_doc_url(&self) -> Option<&str> {
        self.ext_doc_url.as_deref()
    }

    fn ext_doc_description(&self) -> Option<&str> {
        self.ext_doc_description.as_deref()
    }

    fn ext_previous_version_doc_url(&self) -> Option<&str> {
        self.ext_previous_version_doc_url.as_deref()
    }

    fn ext_doc_id(&self) -> Option<&str> {
        self.ext_doc_id.as_deref()
    }
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum ServerDefault {
    Boolean(bool),
    String(String),
    Number(f64),
    StringArray(Vec<String>),
    NumberArray(Vec<String>),
}

//--------------------------------------------------------------------------------------------

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "snake_case", tag = "kind")]
pub enum Variants {
    ExternalTag(ExternalTag),
    InternalTag(InternalTag),
    Untagged(Untagged),
    Container(Container),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ExternalTag {
    #[serde(default)]
    pub non_exhaustive: bool,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct InternalTag {
    #[serde(default)]
    pub non_exhaustive: bool,

    /// Name of the property that holds the variant tag
    pub tag: String,

    /// Default value for the variant tag if it's missing
    #[serde(skip_serializing_if = "Option::is_none")]
    pub default_tag: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Untagged {
    #[serde(default)]
    pub non_exhaustive: bool,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Container {
    #[serde(default)]
    pub non_exhaustive: bool,
}

/// Inherits clause (aka extends or implements) for an interface or request
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Inherits {
    #[serde(rename = "type")]
    pub typ: TypeName,

    #[serde(default, skip_serializing_if = "Vec::is_empty")]
    pub generics: Vec<ValueOf>,
}

#[derive(Debug, Clone, Serialize, Deserialize, From)]
#[serde(rename_all = "snake_case", tag = "kind")]
#[allow(clippy::large_enum_variant)]
pub enum TypeDefinition {
    Interface(Interface),
    Request(Request),
    Response(Response),
    Enum(Enum),
    TypeAlias(TypeAlias),
}

impl TypeDefinition {
    pub fn name(&self) -> &TypeName {
        &self.base().name
    }

    pub fn base(&self) -> &BaseType {
        use TypeDefinition::*;
        match self {
            Interface(x) => &x.base,
            Request(x) => &x.base,
            Response(x) => &x.base,
            Enum(x) => &x.base,
            TypeAlias(x) => &x.base,
        }
    }

    pub fn base_mut(&mut self) -> &mut BaseType {
        use TypeDefinition::*;
        match self {
            Interface(x) => &mut x.base,
            Request(x) => &mut x.base,
            Response(x) => &mut x.base,
            Enum(x) => &mut x.base,
            TypeAlias(x) => &mut x.base,
        }
    }
}

/// The Example type is used for both requests and responses.
///
/// This type definition is based on the OpenAPI spec
///     https://spec.openapis.org/oas/v3.1.0#example-object
/// with the exception of using String as the 'value' type,
/// and some custom additions.
///
/// The OpenAPI v3 spec also defines the 'Example' type, so
/// to distinguish them, this type is called SchemaExample.

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ExampleAlternative {
    pub language: String,
    pub code: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SchemaExample {
    pub summary: Option<String>,
    pub method_request: Option<String>,
    pub description: Option<String>,
    pub value: Option<String>,
    pub external_value: Option<String>,
    pub alternatives: Option<Vec<ExampleAlternative>>,
}

/// Common attributes for all type definitions
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct BaseType {
    pub name: TypeName,

    #[serde(skip_serializing_if = "Option::is_none")]
    pub description: Option<String>,

    /// Link to public documentation
    #[serde(skip_serializing_if = "Option::is_none")]
    pub doc_url: Option<String>,

    #[serde(skip_serializing_if = "Option::is_none")]
    pub doc_id: Option<String>,

    /// Link to public documentation
    #[serde(skip_serializing_if = "Option::is_none")]
    pub ext_doc_url: Option<String>,

    #[serde(skip_serializing_if = "Option::is_none")]
    pub ext_doc_description: Option<String>,

    #[serde(skip_serializing_if = "Option::is_none")]
    pub ext_previous_version_doc_url: Option<String>,

    #[serde(skip_serializing_if = "Option::is_none")]
    pub ext_doc_id: Option<String>,

    #[serde(skip_serializing_if = "Option::is_none")]
    pub deprecation: Option<Deprecation>,

    /// If this endpoint has a quirk that needs special attention, give a short explanation about it
    #[serde(skip_serializing_if = "Option::is_none")]
    pub es_quirk: Option<String>,

    /// Variant name for externally tagged variants
    #[serde(skip_serializing_if = "Option::is_none")]
    pub variant_name: Option<String>,

    /// Additional identifiers for use by code generators. Usage depends on the actual type:
    /// - on unions (modeled as alias(union_of)), these are identifiers for the union members
    /// - for additional properties, this is the name of the dict that holds these properties
    /// - for additional property, this is the name of the key and value fields that hold the additional property
    #[serde(default, skip_serializing_if = "Vec::is_empty")]
    pub codegen_names: Vec<String>,

    /// Location of an item. The path is relative to the "specification" directory, e.g "_types/common.ts#L1-L2"
    #[serde(skip_serializing_if = "Option::is_none")]
    pub spec_location: Option<String>,
}

impl BaseType {
    pub fn new(name: TypeName) -> BaseType {
        BaseType {
            name,
            codegen_names: Default::default(),
            doc_id: None,
            doc_url: None,
            deprecation: None,
            es_quirk: None,
            description: None,
            variant_name: None,
            spec_location: None,
            ext_doc_id: None,
            ext_doc_url: None,
            ext_doc_description: None,
            ext_previous_version_doc_url: None,
        }
    }
}

impl Documented for BaseType {
    fn doc_url(&self) -> Option<&str> {
        self.doc_url.as_deref()
    }

    fn doc_id(&self) -> Option<&str> {
        self.doc_id.as_deref()
    }

    fn description(&self) -> Option<&str> {
        self.description.as_deref()
    }
}

impl ExternalDocument for BaseType {
    fn ext_doc_url(&self) -> Option<&str> {
        self.ext_doc_url.as_deref()
    }

    fn ext_doc_description(&self) -> Option<&str> {
        self.ext_doc_description.as_deref()
    }

    fn ext_previous_version_doc_url(&self) -> Option<&str> {
        self.ext_previous_version_doc_url.as_deref()
    }

    fn ext_doc_id(&self) -> Option<&str> {
        self.ext_doc_id.as_deref()
    }
}

trait WithBaseType {
    fn base(&self) -> &BaseType;
}

impl<T: WithBaseType> Documented for T {
    fn doc_url(&self) -> Option<&str> {
        self.base().doc_url()
    }

    fn doc_id(&self) -> Option<&str> {
        self.base().doc_id()
    }

    fn description(&self) -> Option<&str> {
        self.base().description()
    }
}

impl<T: WithBaseType> ExternalDocument for T {
    fn ext_doc_url(&self) -> Option<&str> {
        self.base().doc_url()
    }

    fn ext_doc_description(&self) -> Option<&str> {
        self.base().ext_doc_description()
    }

    fn ext_previous_version_doc_url(&self) -> Option<&str> {
        self.base().ext_previous_version_doc_url()
    }

    fn ext_doc_id(&self) -> Option<&str> {
        self.base().doc_id()
    }
}

/// An interface type
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Interface {
    #[serde(flatten)]
    pub base: BaseType,

    /// Open generic parameters. The name is that of the parameter, the namespace is an arbitrary value that allows
    /// this fully qualified type name to be used when this open generic parameter is used in property's type.
    #[serde(default, skip_serializing_if = "Vec::is_empty")]
    pub generics: Vec<TypeName>,

    #[serde(skip_serializing_if = "Option::is_none")]
    pub inherits: Option<Inherits>,

    #[serde(default, skip_serializing_if = "Vec::is_empty")]
    pub implements: Vec<Inherits>,

    /// Behaviors directly implemented by this interface
    #[serde(default, skip_serializing_if = "Vec::is_empty")]
    pub behaviors: Vec<Inherits>,

    /// Behaviors attached to this interface, coming from the interface itself (see `behaviors`)
    /// or from inherits and implements ancestors
    #[serde(default, skip_serializing_if = "Vec::is_empty")]
    pub attached_behaviors: Vec<String>,

    pub properties: Vec<Property>,

    /// The property that can be used as a shortcut for the entire data structure in the JSON.
    #[serde(skip_serializing_if = "Option::is_none")]
    pub shortcut_property: Option<String>,

    // Identify containers
    #[serde(skip_serializing_if = "Option::is_none")]
    pub variants: Option<Container>,
}

impl WithBaseType for Interface {
    fn base(&self) -> &BaseType {
        &self.base
    }
}

/// A request type
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
// Note: does not extend Interface as properties are split across path, query and body
pub struct Request {
    #[serde(flatten)]
    pub base: BaseType,

    #[serde(default, skip_serializing_if = "Vec::is_empty")]
    pub generics: Vec<TypeName>,

    /// The parent defines additional body properties that are added to the body, that has to be a PropertyBody
    pub inherits: Option<Inherits>,

    #[serde(default, skip_serializing_if = "Vec::is_empty")]
    pub implements: Vec<Inherits>,

    /// URL path properties
    pub path: Vec<Property>,

    /// Query string properties
    pub query: Vec<Property>,

    /// Body type. Most often a list of properties (that can extend those of the inherited class, see above), except
    /// for a few specific cases that use other types such as bulk (array) or create (generic parameter). Or NoBody
    /// for requests that don't have a body.
    pub body: Body,

    #[serde(default, skip_serializing_if = "Vec::is_empty")]
    pub behaviors: Vec<Inherits>,

    #[serde(default, skip_serializing_if = "Vec::is_empty")]
    pub attached_behaviors: Vec<String>,

    pub examples: Option<IndexMap<String, SchemaExample>>
}

impl WithBaseType for Request {
    fn base(&self) -> &BaseType {
        &self.base
    }
}

/// A response type
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Response {
    #[serde(flatten)]
    pub base: BaseType,

    #[serde(default, skip_serializing_if = "Vec::is_empty")]
    pub generics: Vec<TypeName>,

    pub body: Body,

    #[serde(default, skip_serializing_if = "Vec::is_empty")]
    pub behaviors: Vec<Inherits>,

    #[serde(default, skip_serializing_if = "Vec::is_empty")]
    pub attached_behaviors: Vec<String>,

    #[serde(default, skip_serializing_if = "Vec::is_empty")]
    pub exceptions: Vec<ResponseException>,

    pub examples: Option<IndexMap<String, SchemaExample>>
}

impl WithBaseType for Response {
    fn base(&self) -> &BaseType {
        &self.base
    }
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ResponseException {
    #[serde(skip_serializing_if = "Option::is_none")]
    pub description: Option<String>,

    pub body: Body,

    pub status_codes: Vec<usize>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "snake_case", tag = "kind")]
pub enum Body {
    Value(ValueBody),
    Properties(PropertiesBody),
    NoBody(NoBody),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ValueBody {
    pub value: ValueOf,

    #[serde(skip_serializing_if = "Option::is_none")]
    pub codegen_name: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct PropertiesBody {
    pub properties: Vec<Property>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct NoBody {}

/// An enumeration member.
///
/// When enumeration members can become ambiguous when translated to an identifier, the `name` property will be a good
/// identifier name, and `stringValue` will be the string value to use on the wire.
/// See DateMathTimeUnit for an example of this, which have members for "m" (minute) and "M" (month).
#[derive(Debug, Clone, Serialize, Deserialize, Default)]
#[serde(rename_all = "camelCase")]
pub struct EnumMember {
    /// The identifier to use for this enum
    pub name: String,

    /// An optional set of aliases for `name`
    #[serde(default, skip_serializing_if = "Vec::is_empty")]
    pub aliases: Vec<String>,

    /// If specified takes precedence over `name` when generating code. `name` is always the value
    /// to be sent over the wire
    #[serde(skip_serializing_if = "Option::is_none")]
    pub codegen_name: Option<String>,

    #[serde(skip_serializing_if = "Option::is_none")]
    pub description: Option<String>,

    #[serde(skip_serializing_if = "Option::is_none")]
    pub deprecation: Option<Deprecation>,

    #[serde(skip_serializing_if = "Option::is_none")]
    pub since: Option<String>,

    #[serde(skip_serializing_if = "Option::is_none")]
    pub availability: Option<Availabilities>,
}

impl From<&str> for EnumMember {
    fn from(name: &str) -> Self {
        EnumMember {
            name: name.to_string(),
            ..Default::default()
        }
    }
}

/// An enumeration
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Enum {
    #[serde(flatten)]
    pub base: BaseType,

    /// If the enum is open, it means that other than the specified values it can accept an arbitrary value.
    /// If this property is not present, it means that the enum is not open (in other words, is closed).
    #[serde(default)]
    pub is_open: bool,

    pub members: Vec<EnumMember>,
}

/// An alias for an existing type.
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct TypeAlias {
    #[serde(flatten)]
    pub base: BaseType,

    #[serde(rename = "type")]
    pub typ: ValueOf,

    /// generic parameters: either concrete types or open parameters from the enclosing type
    #[serde(default, skip_serializing_if = "Vec::is_empty")]
    pub generics: Vec<TypeName>,

    /// Only applicable to `union_of` aliases: identify typed_key unions (external) and variant inventories (internal)
    #[serde(default, skip_serializing_if = "Option::is_none")]
    pub variants: Option<TypeAliasVariants>,
}

impl TypeAlias {
    pub fn new(name: TypeName, typ: ValueOf) -> TypeAlias {
        TypeAlias {
            base: BaseType::new(name),
            typ,
            variants: Default::default(),
            generics: Default::default(),
        }
    }
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "snake_case", tag = "kind")]
pub enum TypeAliasVariants {
    ExternalTag(ExternalTag),
    InternalTag(InternalTag),
    Untagged(Untagged),
}

//------------------------------------------------------------------------------------------------------------

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Endpoint {
    pub name: String,

    pub description: String,

    #[serde(skip_serializing_if = "Option::is_none")]
    pub doc_url: Option<String>,

    #[serde(skip_serializing_if = "Option::is_none")]
    pub doc_url_serverless: Option<String>,

    #[serde(skip_serializing_if = "Option::is_none")]
    pub doc_id: Option<String>,

    #[serde(skip_serializing_if = "Option::is_none")]
    pub ext_doc_id: Option<String>,

    #[serde(skip_serializing_if = "Option::is_none")]
    pub ext_doc_url: Option<String>,

    #[serde(skip_serializing_if = "Option::is_none")]
    pub ext_doc_description: Option<String>,

    #[serde(skip_serializing_if = "Option::is_none")]
    pub ext_previous_version_doc_url: Option<String>,

    #[serde(skip_serializing_if = "Option::is_none")]
    pub deprecation: Option<Deprecation>,

    #[serde(skip_serializing_if = "Option::is_none")]
    pub availability: Option<Availabilities>,

    #[serde(skip_serializing_if = "Option::is_none")]
    pub doc_tag: Option<String>,

    /// If missing, there is not yet a request definition for this endpoint.
    #[serde(skip_serializing_if = "Option::is_none")]
    pub request: Option<TypeName>,

    pub request_body_required: bool, // Not sure this is useful

    /// If missing, there is not yet a response definition for this endpoint.
    #[serde(skip_serializing_if = "Option::is_none")]
    pub response: Option<TypeName>,

    pub urls: Vec<UrlTemplate>,

    #[serde(default, skip_serializing_if = "Vec::is_empty")]
    pub request_media_type: Vec<String>,

    #[serde(default, skip_serializing_if = "Vec::is_empty")]
    pub response_media_type: Vec<String>,

    #[serde(skip_serializing_if = "Option::is_none")]
    pub privileges: Option<Privileges>,
}

impl Documented for Endpoint {
    fn doc_url(&self) -> Option<&str> {
        self.doc_url.as_deref()
    }

    fn doc_id(&self) -> Option<&str> {
        self.doc_id.as_deref()
    }

    fn description(&self) -> Option<&str> {
        Some(self.description.as_str())
    }
}

impl ExternalDocument for Endpoint {
    fn ext_doc_url(&self) -> Option<&str> {
        self.ext_doc_url.as_deref()
    }

    fn ext_doc_description(&self) -> Option<&str> {
        self.ext_doc_description.as_deref()
    }

    fn ext_previous_version_doc_url(&self) -> Option<&str> {
        self.ext_previous_version_doc_url.as_deref()
    }

    fn ext_doc_id(&self) -> Option<&str> {
        self.ext_doc_id.as_deref()
    }
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Privileges {
    #[serde(default)]
    pub index: Vec<String>,

    #[serde(default)]
    pub cluster: Vec<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct UrlTemplate {
    pub path: String,

    pub methods: Vec<String>,

    #[serde(skip_serializing_if = "Option::is_none")]
    pub deprecation: Option<Deprecation>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ModelInfo {
    pub title: String,
    pub license: License,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct License {
    pub name: String,
    pub url: String,
}

#[derive(Debug, Clone, Serialize, Deserialize, Default)]
#[serde(rename_all = "camelCase")]
pub struct Model {
    #[serde(rename = "_info", skip_serializing_if = "Option::is_none")]
    pub info: Option<ModelInfo>,
    pub endpoints: Vec<Endpoint>,
    pub types: Vec<TypeDefinition>,
}

impl Model {
    pub fn from_reader(r: impl std::io::Read) -> Result<Self, serde_json::error::Error> {
        serde_json::from_reader(r)
    }
}

//-------------------------------------------------------------------------------------------------
/// An api model with types indexed by their name. This version is much more convenient to use
/// when traversing the type graph and provides convenience accessors to the various kinds of
/// types.
#[derive(Debug, Clone, Serialize, Deserialize, Default)]
#[serde(rename_all = "camelCase")]
pub struct IndexedModel {
    #[serde(rename = "_info", skip_serializing_if = "Option::is_none")]
    pub info: Option<ModelInfo>,

    pub endpoints: Vec<Endpoint>,

    #[serde(serialize_with = "serialize_types")]
    #[serde(deserialize_with = "deserialize_types")]
    pub types: IndexMap<TypeName, TypeDefinition>,
}

impl IndexedModel {
    pub fn from_reader(r: impl std::io::Read) -> Result<Self, serde_json::error::Error> {
        serde_json::from_reader(r)
    }

    pub fn get_type(&self, name: &TypeName) -> anyhow::Result<&TypeDefinition> {
        match self.types.get(name) {
            Some(value) => Ok(value),
            None => Err(anyhow!("Type not found: {}", name)),
        }
    }

    pub fn get_type_mut(&mut self, name: &TypeName) -> anyhow::Result<&mut TypeDefinition> {
        match self.types.get_mut(name) {
            Some(value) => Ok(value),
            None => Err(anyhow!("Type not found: {}", name)),
        }
    }

    pub fn get_interface(&self, name: &TypeName) -> anyhow::Result<&Interface> {
        match self.get_type(name)? {
            TypeDefinition::Interface(ref v) => Ok(v),
            _ => Err(anyhow!("Type is not an interface: {}", name)),
        }
    }

    pub fn get_interface_mut(&mut self, name: &TypeName) -> anyhow::Result<&mut Interface> {
        match self.get_type_mut(name)? {
            TypeDefinition::Interface(ref mut v) => Ok(v),
            _ => Err(anyhow!("Type is not an interface: {}", name)),
        }
    }

    pub fn get_request(&self, name: &TypeName) -> anyhow::Result<&Request> {
        match self.get_type(name)? {
            TypeDefinition::Request(ref v) => Ok(v),
            _ => Err(anyhow!("Type is not a request: {}", name)),
        }
    }

    pub fn get_request_mut(&mut self, name: &TypeName) -> anyhow::Result<&mut Request> {
        match self.get_type_mut(name)? {
            TypeDefinition::Request(ref mut v) => Ok(v),
            _ => Err(anyhow!("Type is not a request: {}", name)),
        }
    }

    pub fn get_response(&self, name: &TypeName) -> anyhow::Result<&Response> {
        match self.get_type(name)? {
            TypeDefinition::Response(ref v) => Ok(v),
            _ => Err(anyhow!("Type is not a request: {}", name)),
        }
    }

    pub fn get_response_mut(&mut self, name: &TypeName) -> anyhow::Result<&mut Response> {
        match self.get_type_mut(name)? {
            TypeDefinition::Response(ref mut v) => Ok(v),
            _ => Err(anyhow!("Type is not a request: {}", name)),
        }
    }
}

//-------------------------------------------------------------------------------------------------
// IndexedModel serialization and deserialization
//-------------------------------------------------------------------------------------------------

fn serialize_types<S>(value: &IndexMap<TypeName, TypeDefinition>, serializer: S) -> Result<S::Ok, S::Error>
where S: serde::Serializer {
    let mut seq = serializer.serialize_seq(Some(value.len()))?;
    for (_, v) in value {
        seq.serialize_element(v)?;
    }
    seq.end()
}

fn deserialize_types<'de, D>(deser: D) -> Result<IndexMap<TypeName, TypeDefinition>, D::Error>
where D: serde::Deserializer<'de> {
    deser.deserialize_seq(IndexMapVisitor)
}

struct IndexMapVisitor;

impl<'a> serde::de::Visitor<'a> for IndexMapVisitor {
    type Value = IndexMap<TypeName, TypeDefinition>;

    fn expecting(&self, formatter: &mut Formatter) -> std::fmt::Result {
        write!(formatter, "an array")
    }

    fn visit_seq<A>(self, mut seq: A) -> Result<Self::Value, A::Error>
    where A: SeqAccess<'a> {
        let mut result = IndexMap::with_capacity(seq.size_hint().unwrap_or(0));

        while let Some(item) = seq.next_element::<TypeDefinition>()? {
            result.insert(item.name().clone(), item);
        }

        Ok(result)
    }
}

//-------------------------------------------------------------------------------------------------
// Conversions between Model and IndexedModel
//-------------------------------------------------------------------------------------------------

impl From<Model> for IndexedModel {
    fn from(value: Model) -> Self {
        IndexedModel {
            info: value.info,
            endpoints: value.endpoints,
            types: value.types.into_iter().map(|t| (t.name().clone(), t)).collect(),
        }
    }
}

impl From<IndexedModel> for Model {
    fn from(value: IndexedModel) -> Model {
        Model {
            info: value.info,
            endpoints: value.endpoints,
            types: value.types.into_iter().map(|(_, t)| t).collect(),
        }
    }
}

//-------------------------------------------------------------------------------------------------

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    /// Loads the Elasticsearch schema. Assumes the elasticsearch-specification project has been
    /// checked out as a sibling of this one.
    fn load_schema() {
        println!("{:?}", std::env::current_dir());
        let json = std::fs::read_to_string("../../output/schema/schema.json").unwrap();

        let jd = &mut serde_json::Deserializer::from_str(&json);
        let result = serde_path_to_error::deserialize::<_, IndexedModel>(jd);

        let result = result
            .map_err(|e| {
                println!("Error at path {}", e.path());
                e.into_inner()
            })
            .unwrap();

        // Simple smoke test
        let search_req = TypeName {
            namespace: "_global.search".into(),
            name: "Request".into(),
        };

        let search_type = result.get_type(&search_req).unwrap();

        match search_type {
            TypeDefinition::Request(r) => assert!(!r.path.is_empty()),
            _ => panic!("Expecting a Request"),
        };
    }
}
