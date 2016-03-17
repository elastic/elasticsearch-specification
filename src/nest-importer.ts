import domain = require("./domain");
import importer = require("./nest-importer");
import spec = require("./spec");
import _ = require('lodash');
import fs = require('fs');
var typescript = require('ntypescript');
var changeCase = require('change-case');
var mkdirp = require('mkdirp');

let fileName = "specs/typedefinitions.ts";
interface DocEntry {
    name?: string,
    fileName?: string,
    documentation?: string,
    namespace: string;
    ambiguous: boolean;
    custom_serialization: boolean;
    source: string,
};

/** Generate documention for all classes in a set of .ts files */
function splitNestOutputFile(): void {
    let fileNames = [fileName]
    let options : ts.CompilerOptions = { target: ts.ScriptTarget.ES6, module: ts.ModuleKind.CommonJS };
    // Build a program using the set of root file names in fileNames
    let program = ts.createProgram(fileNames, options);

    // Get the checker, we will use it to find more about classes
    let checker = program.getTypeChecker();

    let output: DocEntry[] = [];

    // Visit every sourceFile in the program
    for (const sourceFile of program.getSourceFiles()) {
        if (sourceFile.path.match(/lib.es6/)) continue;
        // Walk the tree to search for classes
        ts.forEachChild(sourceFile, visit);
    }

    var folder = "specs/"
    for (var d of output)
    {
      var subFolder = folder + d.namespace.replace(/(\w+)\.?/g, function(m) { return changeCase.snakeCase(m) + "/"; });
      var f =  subFolder + d.name + ".ts";
      console.log(subFolder)
      mkdirp.sync(subFolder);
      fs.writeFileSync(f, d.source);
    }

    return;

    /** visit nodes finding exported classes */
    function visit(node: ts.Node) {
        // Only consider exported nodes
        if (!isNodeExported(node))
            return;

        if (node.kind === ts.SyntaxKind.InterfaceDeclaration || node.kind == ts.SyntaxKind.EnumDeclaration) {
            // This is a top level class, get its symbol
            let symbol = checker.getSymbolAtLocation((<ts.InterfaceDeclaration>node).name);
            var name = changeCase.snakeCase(symbol.getName());
            var documentation = ts.displayPartsToString(symbol.getDocumentationComment());
            var source = node.getFullText();
            var docParts = documentation.split("\n");

            var ns = "";
            var ambiguous = false;
            var custom_serialization = false;
            for (var i = 0;i<docParts.length;i++)
            {
              var p = docParts[i].trim();
              if (p.match(/^namespace/))
                ns = p.replace(/^namespace:(.+)$/, "$1").trim();
              if (p.match(/^custom_serialization/)) custom_serialization = true;
              if (p.match(/^ambiguous/)) ambiguous = true;
            }

            output.push({ name: name, documentation: documentation, source: source, namespace: ns, ambiguous: ambiguous, custom_serialization: custom_serialization});
        }
        else if (node.kind === ts.SyntaxKind.ModuleDeclaration) {
            // This is a namespace, visit its children
            ts.forEachChild(node, visit);
        }
    }
    /** True if this is visible outside this file, false otherwise */
    function isNodeExported(node: ts.Node): boolean {
        return (node.flags & ts.NodeFlags.Export) !== 0 || (node.parent && node.parent.kind === ts.SyntaxKind.SourceFile);
    }
}
export = splitNestOutputFile;
