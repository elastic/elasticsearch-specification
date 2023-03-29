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

// Re-export crates whose types we expose publicly
pub use once_cell;

// Child modules
pub mod builtins;

use once_cell::sync::Lazy;
use serde::{Deserialize, Serialize};

#[allow(clippy::trivially_copy_pass_by_ref)] // needs to match signature for use in serde attribute
#[inline]
const fn is_false(v: &bool) -> bool {
    !(*v)
}

#[derive(Debug, Clone, Serialize, Deserialize, PartialEq, PartialOrd, Hash)]
pub struct TypeName {
    pub namespace: String,
    pub name: String
}

impl TypeName {
    pub fn new(namespace: &str, name: &str) -> TypeName {
        TypeName {
            namespace: String::from(namespace),
            name: name.into(),
        }
    }
}
///
/// Type of a value. Used both for property types and nested type definitions.
///
#[derive(Debug, Clone, Serialize, Deserialize, PartialEq, PartialOrd)]
#[serde(tag = "kind", rename_all="snake_case")]
pub enum ValueOf {
    InstanceOf(InstanceOf),
    ArrayOf(ArrayOf),
    UnionOf(UnionOf),
    DictionaryOf(DictionaryOf),
    UserDefinedValue(UserDefinedValue),
    LiteralValue(LiteralValue)
}

impl ValueOf {
    pub fn instance_of(name: TypeName) -> ValueOf {
        ValueOf::InstanceOf(InstanceOf::new(name))
    }
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

///
/// A single value
///
#[derive(Debug, Clone, Serialize, Deserialize, PartialEq, PartialOrd)]
pub struct InstanceOf {
    #[serde(rename="type")]
    pub typ: TypeName,

    /// generic parameters: either concrete types or open parameters from the enclosing type
    #[serde(default, skip_serializing_if = "Vec::is_empty")]
    pub generics: Vec<ValueOf>
}

impl InstanceOf {
    pub fn new(name: TypeName) -> InstanceOf {
        InstanceOf {
            typ: name,
            generics: Vec::default(),
        }
    }
}

///
/// An array
///
#[derive(Debug, Clone, Serialize, Deserialize, PartialEq, PartialOrd)]
pub struct ArrayOf {
    pub value: Box<ValueOf>
}

///
/// One of several possible types which don't necessarily have a common superclass
///
#[derive(Debug, Clone, Serialize, Deserialize, PartialEq, PartialOrd)]
pub struct UnionOf {
    pub items: Vec<ValueOf>
}

///
/// A dictionary (or map).  The key is a string or a number (or a union thereof), possibly through an alias.
///
/// If `singleKey` is true, then this dictionary can only have a single key. This is a common pattern in ES APIs,
/// used to associate a value to a field name or some other identifier.
///
#[derive(Debug, Clone, Serialize, Deserialize, PartialEq, PartialOrd)]
#[serde(rename_all = "camelCase")]
pub struct DictionaryOf {
    pub key: Box<ValueOf>,
    pub value: Box<ValueOf>,
    pub single_key: bool,
}

///
/// A user defined value. To be used when bubbling a generic parameter up to the top-level class is
/// inconvenient or impossible (e.g. for lists of user-defined values of possibly different types).
///
/// Clients will allow providing a serializer/deserializer when reading/writing properties of this type,
/// and should also accept raw json.
///
/// Think twice before using this as it defeats the purpose of a strongly typed API, and deserialization
/// will also require to buffer raw JSON data which may have performance implications.
///
#[derive(Debug, Clone, Serialize, Deserialize, PartialEq, PartialOrd)]
#[serde(rename_all = "camelCase")]
pub struct UserDefinedValue {
}

///
/// A literal value. This is used for tagged unions, where each type member of a union has a 'type'
/// attribute that defines its kind. This metamodel heavily uses this approach with its 'kind' attributes.
///
/// It may later be used to set a property to a constant value, which is why it accepts not only strings but also
/// other primitive types.
///
#[derive(Debug, Clone, Serialize, Deserialize, PartialEq, PartialOrd)]
#[serde(rename_all = "camelCase")]
pub struct LiteralValue {
    pub value: LiteralValueValue
}

#[derive(Debug, Clone, Serialize, Deserialize, PartialEq, PartialOrd)]
#[serde(untagged)]
pub enum LiteralValueValue {
    String(String),
    Number(f64),
    Boolean(bool)
}

//--------------------------------------------------------------------------------------------

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "snake_case")]
pub enum Stability {
    Stable,
    Beta,
    Experimental,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
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

///
/// An interface or request interface property.
///
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Property {
    pub name: String,

    #[serde(rename="type")]
    pub typ: ValueOf,

    pub required: bool,

    #[serde(skip_serializing_if = "Option::is_none")]
    pub description: Option<String>,

    #[serde(skip_serializing_if = "Option::is_none")]
    pub doc_url: Option<String>,

    #[serde(skip_serializing_if = "Option::is_none")]
    pub doc_id: Option<String>,

    #[serde(skip_serializing_if = "Option::is_none")]
    pub since: Option<String>,

    #[serde(skip_serializing_if = "Option::is_none")]
    pub server_default: Option<ServerDefault>,

    #[serde(skip_serializing_if = "Option::is_none")]
    pub deprecation: Option<Deprecation>,

    #[serde(skip_serializing_if = "Option::is_none")]
    pub stability: Option<Stability>,

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
#[serde(rename_all = "snake_case", tag="kind")]
pub enum Variants {
    ExternalTag(ExternalTag),
    InternalTag(InternalTag),
    Container(Container),
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ExternalTag {
    #[serde(default)]
    pub non_exhaustive: bool
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
pub struct Container {
    #[serde(default)]
    pub non_exhaustive: bool,
}

///
/// Inherits clause (aka extends or implements) for an interface or request
///
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Inherits {
    #[serde(rename="type")]
    pub typ: TypeName,

    #[serde(default, skip_serializing_if = "Vec::is_empty")]
    pub generics: Vec<ValueOf>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "snake_case", tag="kind")]
pub enum TypeDefinition {
    Interface(Interface),
    Request(Request),
    Response(Response),
    Enum(Enum),
    TypeAlias(TypeAlias),
}

impl TypeDefinition {
    pub fn type_alias(name: TypeName, value: ValueOf) -> TypeDefinition {
        TypeDefinition::TypeAlias(TypeAlias::new(name, value))
    }
}

impl TypeDefinition {
    pub fn name(&self) -> &TypeName {
        use TypeDefinition::*;
        match self {
            Interface(x) => &x.base.name,
            Request(x) => &x.base.name,
            Response(x) => &x.base.name,
            Enum(x) => &x.base.name,
            TypeAlias(x) => &x.base.name,
        }
    }
}

///
/// Common attributes for all type definitions
///
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
    /// - for additional property, this is the name of the key and value fields that hold the
    ///   additional property
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
            spec_location: None
        }
    }
}

///
/// An interface type
///
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
    pub variants: Option<Container>
}

///
/// A request type
///
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

    /// Body type. Most often a list of properties (that can extend those of the inherited class, see above), except for a
    /// few specific cases that use other types such as bulk (array) or create (generic parameter). Or NoBody for requests
    /// that don't have a body.
    pub body: Body,

    #[serde(default, skip_serializing_if = "Vec::is_empty")]
    pub behaviors: Vec<Inherits>,

    #[serde(default, skip_serializing_if = "Vec::is_empty")]
    pub attached_behaviors: Vec<String>,
}

///
/// A response type
///
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
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ResponseException {
    #[serde(skip_serializing_if = "Option::is_none")]
    pub description: Option<String>,

    pub body: Body,

    pub status_codes: Vec<usize>
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "snake_case", tag="kind")]
pub enum Body {
    Value(ValueBody),
    Properties(PropertiesBody),
    NoBody(NoBody)
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
pub struct NoBody {
}

///
/// An enumeration member.
///
/// When enumeration members can become ambiguous when translated to an identifier, the `name` property will be a good
/// identifier name, and `stringValue` will be the string value to use on the wire.
/// See DateMathTimeUnit for an example of this, which have members for "m" (minute) and "M" (month).
///
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
    pub since: Option<String>
}

impl From<&str> for EnumMember {
    fn from(name: &str) -> Self {
        EnumMember {
            name: name.to_string(),
            ..Default::default()
        }
    }
}

///
/// An enumeration
///
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Enum {
    #[serde(flatten)]
    pub base: BaseType,

    /// If the enum is open, it means that other than the specified values it can accept an arbitrary value.
    /// If this property is not present, it means that the enum is not open (in other words, is closed).
    #[serde(default)]
    pub is_open: bool,

    pub members: Vec<EnumMember>
}

///
/// An alias for an existing type.
///
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct TypeAlias {
    #[serde(flatten)]
    pub base: BaseType,

    #[serde(rename="type")]
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
#[serde(rename_all = "snake_case", tag="kind")]
pub enum TypeAliasVariants {
    ExternalTag(ExternalTag),
    InternalTag(InternalTag),
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
    pub doc_id: Option<String>,

    #[serde(skip_serializing_if = "Option::is_none")]
    pub deprecation: Option<Deprecation>,

    /// If missing, there is not yet a request definition for this endpoint.
    #[serde(skip_serializing_if = "Option::is_none")]
    pub request: Option<TypeName>,

    pub request_body_required: bool, // Not sure this is useful

    /// If missing, there is not yet a response definition for this endpoint.
    #[serde(skip_serializing_if = "Option::is_none")]
    pub response: Option<TypeName>,

    pub urls: Vec<UrlTemplate>,

    /// The version when this endpoint reached its current stability level.
    /// Missing data means "forever", i.e. before any of the target client versions produced from this spec.
    ///
    #[serde(skip_serializing_if = "Option::is_none")]
    pub since: Option<String>,

    #[serde(skip_serializing_if = "Option::is_none")]
    pub stability: Option<Stability>,

    #[serde(skip_serializing_if = "Option::is_none")]
    pub visibility: Option<Visibility>,

    #[serde(skip_serializing_if = "Option::is_none")]
    pub feature_flag: Option<String>,

    #[serde(default, skip_serializing_if = "Vec::is_empty")]
    pub request_media_type: Vec<String>,

    #[serde(default, skip_serializing_if = "Vec::is_empty")]
    pub response_media_type: Vec<String>,

    #[serde(skip_serializing_if = "Option::is_none")]
    pub privileges: Option<Privileges>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct Privileges {
    #[serde(default)]
    pub index: Vec<String>,

    #[serde(default)]
    pub cluster: Vec<String>
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
    #[serde(rename="_info", skip_serializing_if = "Option::is_none")]
    pub info: Option<ModelInfo>,

    pub types: Vec<TypeDefinition>,

    pub endpoints: Vec<Endpoint>,
}

impl Model {
    pub fn from_reader(r: impl std::io::Read) -> Result<Self, serde_json::error::Error> {
        serde_json::from_reader(r)
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    /// Loads the Elasticsearch schema. Assumes the elasticsearch-specification project has been
    /// checked out as a sibling of this one.
    fn load_schema() {
        println!("{:?}", std::env::current_dir());
        let file = std::fs::File::open("../../elasticsearch-specification/output/schema/schema.json").unwrap();

        let jd = &mut serde_json::Deserializer::from_reader(file);
        let result = serde_path_to_error::deserialize::<_, Model>(jd);

        let result = result.map_err(|e| {
            println!("Error at path {}", e.path());
            e.into_inner()
        }).unwrap();

        // Simple smoke test
        let search_req = TypeName {
            namespace: "_global.search".into(),
            name: "Request".into(),
        };

        let search_type = result.types.iter().find(|t| t.name() == &search_req).unwrap();

        match search_type {
            TypeDefinition::Request(r) => assert_eq!(true, !r.path.is_empty()),
            _ => panic!("Expecting a Request")
        };
    }
}
