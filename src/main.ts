/// <reference path="../node_modules/ntypescript/bin/ntypescript.d.ts"/>
/// <reference path="../typings/main/ambient/node/node.d.ts"/>
/// <reference path="../typings/main/ambient/lodash/lodash.d.ts"/>
/// <reference path="./api-spec/domain.ts"/>
var typescript = require('ntypescript');
var _: _.LoDashStatic = require('lodash');;
var fs = require('fs');

let fileName = "specs/master/typedefinitions.ts";
let source : string = fs.readFileSync(fileName).toString();
let sourceFile = ts.createSourceFile(fileName, source, ts.ScriptTarget.ES6, /*setParentNodes */ false);

let declarations : any= sourceFile.getNamedDeclarations();
let kinds : number[] = [];
let domainObjects : TypeDeclaration[] = [];
for (let i in declarations)
{
  let name : string = i;
  let d: ts.Declaration[] = declarations[name];
  var dd : ts.Declaration = d[0];
  console.log((dd.name as any).text, "--", dd.kind)
  switch(dd.kind)
  {
    case ts.SyntaxKind.InterfaceDeclaration:
      var id : ts.InterfaceDeclaration = dd as ts.InterfaceDeclaration;
      let m = id.members;
      let domainObject = new Interface();
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
