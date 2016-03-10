/// <reference path="../node_modules/ntypescript/bin/ntypescript.d.ts"/>
/// <reference path="../typings/main/ambient/node/node.d.ts"/>
/// <reference path="../typings/main/ambient/lodash/lodash.d.ts"/>
/// <reference path="./api-spec/domain.ts"/>
import domain = require("./api-spec/domain");
var typescript = require('ntypescript');
var _: _.LoDashStatic = require('lodash');
import fs = require('fs');
var changeCase = require('change-case');
var mkdirp = require('mkdirp');

let fileName = "specs/master/typedefinitions.ts";
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
function splitNestOutputFile(fileNames: string[], options: ts.CompilerOptions): void {
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

    var folder = "specs/master/"
    for (var d of output)
    {
      var subFolder = folder + d.namespace.replace(/(\w+)\.?/g, function(m) { return changeCase.snakeCase(m) + "/"; });
      var f =  subFolder + d.name + ".ts";
      console.log(subFolder)
      mkdirp.sync(subFolder);
      fs.writeFileSync(f, d.source);
    }

    // print out the doc
    fs.writeFileSync("classes.json", JSON.stringify(output, undefined, 4));

    return;

    /** visit nodes finding exported classes */
    function visit(node: ts.Node) {
        // Only consider exported nodes
        if (!isNodeExported(node)) {
            return;
        }

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

    /** Serialize a symbol into a json object */
    function serializeSymbol(symbol: ts.Symbol): DocEntry {
        return null;
      }

    /** Serialize a signature (call or construct) */
    function serializeSignature(signature: ts.Signature) {
        return {
            paramters: signature.parameters.map(serializeSymbol),
            returnType: checker.typeToString(signature.getReturnType()),
            documentation: ts.displayPartsToString(signature.getDocumentationComment())
        };
    }

    /** True if this is visible outside this file, false otherwise */
    function isNodeExported(node: ts.Node): boolean {
        return (node.flags & ts.NodeFlags.Export) !== 0 || (node.parent && node.parent.kind === ts.SyntaxKind.SourceFile);
    }
}

splitNestOutputFile([fileName], {
    target: ts.ScriptTarget.ES6, module: ts.ModuleKind.CommonJS
});



















let source : string = fs.readFileSync(fileName).toString();
let sourceFile = ts.createSourceFile(fileName, source, ts.ScriptTarget.ES6, /*setParentNodes */ false);

var program = ts.createProgram([fileName], { target: ts.ScriptTarget.ES6, module: ts.ModuleKind.CommonJS});
var checker = program.getTypeChecker();

let declarations : any= sourceFile.getNamedDeclarations();
let kinds : number[] = [];
let domainObjects : domain.TypeDeclaration[] = [];
for (let i in declarations)
{
  let name : string = i;
  let d: ts.Declaration[] = declarations[name];
  var dd : ts.Declaration = d[0];
  //console.log((dd.name as any).text, "--", dd.kind)
  switch(dd.kind)
  {
    case ts.SyntaxKind.InterfaceDeclaration:
      var id : ts.InterfaceDeclaration = dd as ts.InterfaceDeclaration;
      var s = checker.getSymbolAtLocation(id);
      if (s) console.log(s);

      //var doc = id.symbol.getDocumentationComment();
      //if (doc) console.log(doc)

      let m = id.members;
      let domainObject = new domain.Interface();
      domainObject.name = id.name.text;

      break;
    case ts.SyntaxKind.EnumDeclaration:
      break;
  }


  kinds.push(dd.kind)
}
console.log(_.uniq(kinds));

//InterfaceDeclaration = 219
//EnumDeclaration = 221
//EnumMember = 251,
//PropertySignature = 142


/*
let typeDeclarations : TypeDeclaration[] = _.map(declarations, (i: string, d: ts.Declaration[]) : TypeDeclaration => {
  let declaration : ts.Declaration = d[0];
  switch(declaration.name.kind)
  {
    case ts.SyntaxKind.
  }
  return { name: "x" }
}) as any;
*/
