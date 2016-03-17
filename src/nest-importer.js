"use strict";
var fs = require('fs');
var typescript = require('ntypescript');
var changeCase = require('change-case');
var mkdirp = require('mkdirp');
var fileName = "specs/typedefinitions.ts";
;
function splitNestOutputFile() {
    var fileNames = [fileName];
    var options = { target: ts.ScriptTarget.ES6, module: ts.ModuleKind.CommonJS };
    var program = ts.createProgram(fileNames, options);
    var checker = program.getTypeChecker();
    var output = [];
    for (var _i = 0, _a = program.getSourceFiles(); _i < _a.length; _i++) {
        var sourceFile = _a[_i];
        if (sourceFile.path.match(/lib.es6/))
            continue;
        ts.forEachChild(sourceFile, visit);
    }
    var folder = "specs/";
    for (var _b = 0, output_1 = output; _b < output_1.length; _b++) {
        var d = output_1[_b];
        var subFolder = folder + d.namespace.replace(/(\w+)\.?/g, function (m) { return changeCase.snakeCase(m) + "/"; });
        var f = subFolder + d.name + ".ts";
        console.log(subFolder);
        mkdirp.sync(subFolder);
        fs.writeFileSync(f, d.source);
    }
    return;
    function visit(node) {
        if (!isNodeExported(node))
            return;
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
    function isNodeExported(node) {
        return (node.flags & ts.NodeFlags.Export) !== 0 || (node.parent && node.parent.kind === ts.SyntaxKind.SourceFile);
    }
}
module.exports = splitNestOutputFile;
