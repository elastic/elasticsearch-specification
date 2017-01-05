"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var _ = require('lodash');
var Domain;
(function (Domain) {
    var Type = (function () {
        function Type(name) {
            this.name = name;
        }
        return Type;
    }());
    Domain.Type = Type;
    var Array = (function () {
        function Array() {
            this.type = new Type("array");
        }
        return Array;
    }());
    Domain.Array = Array;
    var Map = (function () {
        function Map() {
            this.type = new Type("map");
        }
        return Map;
    }());
    Domain.Map = Map;
    var TypeDeclaration = (function () {
        function TypeDeclaration(name) {
            this.name = name;
        }
        return TypeDeclaration;
    }());
    Domain.TypeDeclaration = TypeDeclaration;
    var Interface = (function (_super) {
        __extends(Interface, _super);
        function Interface() {
            _super.apply(this, arguments);
            this.properties = [];
        }
        return Interface;
    }(TypeDeclaration));
    Domain.Interface = Interface;
    var InterfaceProperty = (function () {
        function InterfaceProperty(name) {
            this.name = name;
        }
        return InterfaceProperty;
    }());
    Domain.InterfaceProperty = InterfaceProperty;
    var Enum = (function (_super) {
        __extends(Enum, _super);
        function Enum(name, flags) {
            if (flags === void 0) { flags = false; }
            _super.call(this, name);
            this.name = name;
            this.flags = flags;
            this.members = [];
        }
        return Enum;
    }(TypeDeclaration));
    Domain.Enum = Enum;
    var EnumMember = (function () {
        function EnumMember(name) {
            this.name = name;
        }
        return EnumMember;
    }());
    Domain.EnumMember = EnumMember;
    var Endpoint = (function () {
        function Endpoint(file) {
            var json = require(file.replace(/\.\//, "./../"));
            this.name = _(json).keys().first();
            var data = json[this.name];
            this.documentation = data.documentation;
            this.methods = data.methods;
            this.bodyDocumentation = data.body;
            if (!data.url)
                console.log(this.name);
            this.url = new Route(data.url);
        }
        return Endpoint;
    }());
    Domain.Endpoint = Endpoint;
    var Route = (function () {
        function Route(data) {
            this.path = data.path;
            this.paths = data.paths;
            this.parts = _(data.parts).map(function (v, k) { return new RoutePart(v, k); }).value();
        }
        return Route;
    }());
    Domain.Route = Route;
    var RoutePart = (function () {
        function RoutePart(name, data) {
            this.name = name;
            this.type = data.type;
            this.description = data.description;
            this.required = !!data.required;
        }
        return RoutePart;
    }());
    Domain.RoutePart = RoutePart;
})(Domain || (Domain = {}));
module.exports = Domain;
