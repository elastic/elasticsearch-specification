"use strict";
var domain = require("./api-spec/domain");
var typescript = require('ntypescript');
var _ = require('lodash');
var fs = require('fs');
var changeCase = require('change-case');
var mkdirp = require('mkdirp');
var fileName = "specs/master/typedefinitions.ts";
;
function splitNestOutputFile(fileNames, options) {
    var program = ts.createProgram(fileNames, options);
    var checker = program.getTypeChecker();
    var output = [];
    for (var _i = 0, _a = program.getSourceFiles(); _i < _a.length; _i++) {
        var sourceFile_1 = _a[_i];
        if (sourceFile_1.path.match(/lib.es6/))
            continue;
        ts.forEachChild(sourceFile_1, visit);
    }
    var folder = "specs/master/";
    for (var _b = 0, output_1 = output; _b < output_1.length; _b++) {
        var d = output_1[_b];
        var subFolder = folder + d.namespace.replace(/(\w+)\.?/g, function (m) { return changeCase.snakeCase(m) + "/"; });
        var f = subFolder + d.name + ".ts";
        console.log(subFolder);
        mkdirp.sync(subFolder);
        fs.writeFileSync(f, d.source);
    }
    fs.writeFileSync("classes.json", JSON.stringify(output, undefined, 4));
    return;
    function visit(node) {
        if (!isNodeExported(node)) {
            return;
        }
        if (node.kind === ts.SyntaxKind.InterfaceDeclaration || node.kind == ts.SyntaxKind.EnumDeclaration) {
            var symbol = checker.getSymbolAtLocation(node.name);
            var name = changeCase.snakeCase(symbol.getName());
            var documentation = ts.displayPartsToString(symbol.getDocumentationComment());
            var source = node.getFullText();
            var docParts = documentation.split("\n");
            var ns = "";
            var ambiguous = false;
            var custom_serialization = false;
            for (var i = 0; i < docParts.length; i++) {
                var p = docParts[i].trim();
                if (p.match(/^namespace/))
                    ns = p.replace(/^namespace:(.+)$/, "$1").trim();
                if (p.match(/^custom_serialization/))
                    custom_serialization = true;
                if (p.match(/^ambiguous/))
                    ambiguous = true;
            }
            output.push({ name: name, documentation: documentation, source: source, namespace: ns, ambiguous: ambiguous, custom_serialization: custom_serialization });
        }
        else if (node.kind === ts.SyntaxKind.ModuleDeclaration) {
            ts.forEachChild(node, visit);
        }
    }
    function serializeSymbol(symbol) {
        return null;
    }
    function serializeSignature(signature) {
        return {
            paramters: signature.parameters.map(serializeSymbol),
            returnType: checker.typeToString(signature.getReturnType()),
            documentation: ts.displayPartsToString(signature.getDocumentationComment())
        };
    }
    function isNodeExported(node) {
        return (node.flags & ts.NodeFlags.Export) !== 0 || (node.parent && node.parent.kind === ts.SyntaxKind.SourceFile);
    }
}
splitNestOutputFile([fileName], {
    target: ts.ScriptTarget.ES6, module: ts.ModuleKind.CommonJS
});
var source = fs.readFileSync(fileName).toString();
var sourceFile = ts.createSourceFile(fileName, source, ts.ScriptTarget.ES6, false);
var program = ts.createProgram([fileName], { target: ts.ScriptTarget.ES6, module: ts.ModuleKind.CommonJS });
var checker = program.getTypeChecker();
var declarations = sourceFile.getNamedDeclarations();
var kinds = [];
var domainObjects = [];
for (var i in declarations) {
    var name_1 = i;
    var d = declarations[name_1];
    var dd = d[0];
    switch (dd.kind) {
        case ts.SyntaxKind.InterfaceDeclaration:
            var id = dd;
            var s = checker.getSymbolAtLocation(id);
            if (s)
                console.log(s);
            var m = id.members;
            var domainObject = new domain.Interface();
            domainObject.name = id.name.text;
            break;
        case ts.SyntaxKind.EnumDeclaration:
            break;
    }
    kinds.push(dd.kind);
}
console.log(_.uniq(kinds));
