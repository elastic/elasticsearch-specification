"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Domain;
(function (Domain) {
    var Type = (function () {
        function Type() {
        }
        return Type;
    }());
    Domain.Type = Type;
    var TypeDeclaration = (function () {
        function TypeDeclaration() {
        }
        return TypeDeclaration;
    }());
    Domain.TypeDeclaration = TypeDeclaration;
    var Interface = (function (_super) {
        __extends(Interface, _super);
        function Interface() {
            _super.apply(this, arguments);
        }
        return Interface;
    }(TypeDeclaration));
    Domain.Interface = Interface;
    var InterfaceProperty = (function () {
        function InterfaceProperty() {
        }
        return InterfaceProperty;
    }());
    Domain.InterfaceProperty = InterfaceProperty;
    var Enum = (function (_super) {
        __extends(Enum, _super);
        function Enum() {
            _super.apply(this, arguments);
        }
        return Enum;
    }(TypeDeclaration));
    Domain.Enum = Enum;
    var EnumMember = (function () {
        function EnumMember() {
        }
        return EnumMember;
    }());
    Domain.EnumMember = EnumMember;
})(Domain || (Domain = {}));
module.exports = Domain;
