"use strict";
var domain = require("./domain");
var changeCase = require('change-case');
var mkdirp = require('mkdirp');
var typescript = require('ntypescript');
var _ = require('lodash');
var specFolder = "./spec";
var Endpoint = (function () {
    function Endpoint() {
    }
    return Endpoint;
}());
var Specification = (function () {
    function Specification() {
        var validator = new SpecValidator();
        this.errors = validator.errors;
        if (this.errors.length > 0)
            return;
        var specVisitor = new SpecVisitor(validator.program);
    }
    return Specification;
}());
exports.Specification = Specification;
var EndpointReader = (function () {
    function EndpointReader() {
    }
    return EndpointReader;
}());
var SpecValidator = (function () {
    function SpecValidator() {
        this.configPath = "./specs/tsconfig.json";
        this.errors = [];
        var config = ts.readConfigFile(this.configPath, function (file) { return ts.sys.readFile(file); });
        var commandLine = ts.parseJsonConfigFileContent(config.config, ts.sys, "./specs");
        this.program = ts.createProgram(commandLine.fileNames, commandLine.options);
        var emitResult = this.program.emit();
        var allDiagnostics = ts.getPreEmitDiagnostics(this.program).concat(emitResult.diagnostics);
        for (var _i = 0, allDiagnostics_1 = allDiagnostics; _i < allDiagnostics_1.length; _i++) {
            var d = allDiagnostics_1[_i];
            var _a = d.file.getLineAndCharacterOfPosition(d.start), line = _a.line, character = _a.character;
            var message = ts.flattenDiagnosticMessageText(d.messageText, '\n');
            var error = d.file.fileName + " " + line + 1 + "," + character + 1 + ":" + message;
            this.errors.push(error);
        }
    }
    return SpecValidator;
}());
var SpecVisitor = (function () {
    function SpecVisitor(program) {
        this.program = program;
        this.checker = this.program.getTypeChecker();
    }
    SpecVisitor.prototype.createProgram = function () {
        for (var _i = 0, _a = this.program.getSourceFiles(); _i < _a.length; _i++) {
            var f = _a[_i];
            var declarations = f.getNamedDeclarations();
            var domainObjects = [];
            for (var i in declarations) {
                var name_1 = i;
                var d = declarations[name_1];
                var dd = d[0];
                switch (dd.kind) {
                    case ts.SyntaxKind.InterfaceDeclaration:
                        var id = dd;
                        var s = this.checker.getSymbolAtLocation(id);
                        if (s)
                            console.log(s);
                        var m = id.members;
                        var domainObject = new domain.Interface();
                        domainObject.name = id.name.text;
                        break;
                    case ts.SyntaxKind.EnumDeclaration:
                        break;
                }
            }
            console.log(f.fileName);
        }
    };
    return SpecVisitor;
}());
function read() {
}
