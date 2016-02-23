var typescript = require('ntypescript');
var _ = require('lodash');
;
var fs = require('fs');
var fileName = "specs/master/typedefinitions.ts";
var source = fs.readFileSync(fileName).toString();
var sourceFile = ts.createSourceFile(fileName, source, ts.ScriptTarget.ES6, false);
var declarations = sourceFile.getNamedDeclarations();
var kinds = [];
var domainObjects = [];
for (var i in declarations) {
    var name_1 = i;
    var d = declarations[name_1];
    var dd = d[0];
    console.log(dd.name.text, "--", dd.kind);
    switch (dd.kind) {
        case ts.SyntaxKind.InterfaceDeclaration:
            var id = dd;
            var m = id.members;
            var domainObject = new Interface();
            domainObject.name = id.name.text;
            break;
        case ts.SyntaxKind.EnumDeclaration:
            break;
    }
    kinds.push(dd.kind);
}
console.log(_.uniq(kinds));
