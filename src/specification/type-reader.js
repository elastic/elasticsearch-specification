"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Domain = require("../domain");
var _ = require('lodash');
var Visitor = (function () {
    function Visitor(checker) {
        var _this = this;
        this.checker = checker;
        this.symbolName = function (node) { return _this.checker.getSymbolAtLocation(node).getName(); };
    }
    return Visitor;
}());
var EnumVisitor = (function (_super) {
    __extends(EnumVisitor, _super);
    function EnumVisitor(enumNode, checker) {
        _super.call(this, checker);
        this.enumNode = enumNode;
    }
    EnumVisitor.prototype.visit = function () {
        var name = this.symbolName(this.enumNode.name);
        var domainEnum = new Domain.Enum(name);
        for (var _i = 0, _a = this.enumNode.getChildren(); _i < _a.length; _i++) {
            var child = _a[_i];
            this.visitMember(child, domainEnum);
        }
        return domainEnum;
    };
    EnumVisitor.prototype.isMember = function (member, e) {
        if (member.kind == ts.SyntaxKind.EnumMember)
            return true;
        for (var _i = 0, _a = member.getChildren(); _i < _a.length; _i++) {
            var child = _a[_i];
            this.visitMember(child, e);
        }
        return false;
    };
    EnumVisitor.prototype.visitMember = function (member, e) {
        if (!this.isMember(member, e))
            return;
        var name = this.symbolName(member.name);
        e.members.push(new Domain.EnumMember(name));
    };
    return EnumVisitor;
}(Visitor));
var InterfaceVisitor = (function (_super) {
    __extends(InterfaceVisitor, _super);
    function InterfaceVisitor(interfaceNode, checker) {
        _super.call(this, checker);
        this.interfaceNode = interfaceNode;
        this.typeKinds = [
            ts.SyntaxKind.StringKeyword,
            ts.SyntaxKind.BooleanKeyword,
            ts.SyntaxKind.AnyKeyword,
            ts.SyntaxKind.ArrayType,
            ts.SyntaxKind.TypeReference
        ];
    }
    InterfaceVisitor.prototype.visit = function () {
        var _this = this;
        var name = this.symbolName(this.interfaceNode.name);
        var domainInterface = new Domain.Interface(name);
        ts.forEachChild(this.interfaceNode, function (c) { return _this.visitInterfaceProperty(c, domainInterface); });
        return domainInterface;
    };
    InterfaceVisitor.prototype.isPropertySignature = function (p, parent) {
        var _this = this;
        if (p.kind == ts.SyntaxKind.PropertySignature)
            return true;
        ts.forEachChild(p, function (c) { return _this.visitInterfaceProperty(c, parent); });
        return false;
    };
    InterfaceVisitor.prototype.visitInterfaceProperty = function (p, parent) {
        if (!this.isPropertySignature(p, parent))
            return;
        var name = this.symbolName(p.name);
        var returnTypeString = "TODO";
        var returnType = this.visitTypeNode(p.type);
        var prop = new Domain.InterfaceProperty(name);
        prop.typeString = returnTypeString;
        prop.type = returnType;
        parent.properties.push(prop);
    };
    InterfaceVisitor.prototype.visitTypeNode = function (t, indent) {
        if (indent === void 0) { indent = 0; }
        switch (t.kind) {
            case ts.SyntaxKind.ArrayType: return this.visitArrayType(t);
            case ts.SyntaxKind.TypeReference: return this.visitTypeReference(t);
            case ts.SyntaxKind.StringKeyword: return new Domain.Type("string");
            case ts.SyntaxKind.BooleanKeyword: return new Domain.Type("boolean");
            case ts.SyntaxKind.AnyKeyword: return new Domain.Type("object");
        }
    };
    InterfaceVisitor.prototype.visitArrayType = function (t) {
        var _this = this;
        var array = new Domain.Array();
        var childrenX = [];
        ts.forEachChild(t, function (c) { return childrenX.push(c); });
        var children = _(childrenX).filter(function (c) { return _(_this.typeKinds).some(function (k) { return k == c.kind; }); });
        if (children.size() != 1)
            throw "Expected array to have 1 useable child but saw " + children.size();
        array.of = this.visitTypeNode(children.first());
        return array;
    };
    InterfaceVisitor.prototype.visitTypeReference = function (t) {
        var _this = this;
        var typeName = t.typeName.getText();
        if (typeName != "map")
            return new Domain.Type(t.getText());
        var childrenX = [];
        ts.forEachChild(t, function (c) {
            childrenX.push(c);
            ts.forEachChild(c, function (cc) { return childrenX.push(cc); });
        });
        var children = _(childrenX).filter(function (c) { return _(_this.typeKinds).some(function (k) { return k == c.kind; }); });
        if (children.size() != 2)
            throw "Expected map to have 2 useable children but saw " + children.size();
        var map = new Domain.Map();
        map.key = this.visitTypeNode(children.first());
        map.value = this.visitTypeNode(children.last());
        return map;
    };
    InterfaceVisitor.prototype.annotate = function (declaration, symbol) {
        var documentation = ts.displayPartsToString(symbol.getDocumentationComment());
    };
    return InterfaceVisitor;
}(Visitor));
var TypeReader = (function () {
    function TypeReader(program) {
        this.program = program;
        this.interfaces = [];
        this.enums = [];
        this.checker = program.getTypeChecker();
        for (var _i = 0, _a = this.program.getSourceFiles(); _i < _a.length; _i++) {
            var f = _a[_i];
            if (f.path.match(/ntypescript/))
                continue;
            if (!f.path.match(/suggest_request|http_method/))
                continue;
            this.visit(f);
        }
    }
    TypeReader.prototype.visit = function (node) {
        var _this = this;
        switch (node.kind) {
            case ts.SyntaxKind.InterfaceDeclaration:
                var iv = new InterfaceVisitor(node, this.checker);
                this.interfaces.push(iv.visit());
                break;
            case ts.SyntaxKind.EnumDeclaration:
                var ev = new EnumVisitor(node, this.checker);
                this.enums.push(ev.visit());
                break;
        }
        ts.forEachChild(node, function (c) { return _this.visit(c); });
    };
    return TypeReader;
}());
module.exports = TypeReader;
