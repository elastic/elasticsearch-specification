/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model = exports.UrlTemplate = exports.Endpoint = exports.Deprecation = exports.Visibility = exports.Stability = exports.TypeAlias = exports.Enum = exports.EnumMember = exports.NoBody = exports.PropertiesBody = exports.ValueBody = exports.Response = exports.Request = exports.Interface = exports.Inherits = exports.Container = exports.InternalTag = exports.ExternalTag = exports.BaseType = exports.Property = exports.LiteralValue = exports.UserDefinedValue = exports.DictionaryOf = exports.UnionOf = exports.ArrayOf = exports.InstanceOf = exports.SourceLocation = exports.TypeName = void 0;
class TypeName {
}
exports.TypeName = TypeName;
class SourceLocation {
}
exports.SourceLocation = SourceLocation;
class InstanceOf {
}
exports.InstanceOf = InstanceOf;
class ArrayOf {
}
exports.ArrayOf = ArrayOf;
class UnionOf {
}
exports.UnionOf = UnionOf;
class DictionaryOf {
}
exports.DictionaryOf = DictionaryOf;
class UserDefinedValue {
}
exports.UserDefinedValue = UserDefinedValue;
class LiteralValue {
}
exports.LiteralValue = LiteralValue;
class Property {
}
exports.Property = Property;
class BaseType {
}
exports.BaseType = BaseType;
class ExternalTag {
}
exports.ExternalTag = ExternalTag;
class InternalTag {
}
exports.InternalTag = InternalTag;
class Container {
}
exports.Container = Container;
class Inherits {
}
exports.Inherits = Inherits;
class Interface extends BaseType {
}
exports.Interface = Interface;
class Request extends BaseType {
}
exports.Request = Request;
class Response extends BaseType {
}
exports.Response = Response;
class ValueBody {
}
exports.ValueBody = ValueBody;
class PropertiesBody {
}
exports.PropertiesBody = PropertiesBody;
class NoBody {
}
exports.NoBody = NoBody;
class EnumMember {
}
exports.EnumMember = EnumMember;
class Enum extends BaseType {
}
exports.Enum = Enum;
class TypeAlias extends BaseType {
}
exports.TypeAlias = TypeAlias;
var Stability;
(function (Stability) {
    Stability["stable"] = "stable";
    Stability["beta"] = "beta";
    Stability["experimental"] = "experimental";
})(Stability = exports.Stability || (exports.Stability = {}));
var Visibility;
(function (Visibility) {
    Visibility["public"] = "public";
    Visibility["featureFlag"] = "feature_flag";
    Visibility["private"] = "private";
})(Visibility = exports.Visibility || (exports.Visibility = {}));
class Deprecation {
}
exports.Deprecation = Deprecation;
class Endpoint {
}
exports.Endpoint = Endpoint;
class UrlTemplate {
}
exports.UrlTemplate = UrlTemplate;
class Model {
}
exports.Model = Model;
//# sourceMappingURL=metamodel.js.map