import domain = require("./domain");
import importer = require("./nest-importer");
import spec = require("./spec");
import fs = require('fs');
var typescript = require('ntypescript');
var _: _.LoDashStatic = require('lodash');

//calling this will break apart a file under specs called typedefinitions.ts which is a rough
//dump of the types in NEST, mainly as a one off to get the spec going
//importer();

var specification = new spec.Specification();

if (specification.domain_errors.length > 0) console.error("The specification contains the following type mapping errors:")
for (let e of specification.domain_errors) console.error("  - " + e);

if (specification.endpoint_errors.length > 0) console.error("The specification contains the following endpoint mapping errors:")
for (let e of specification.endpoint_errors) console.error("  - " + e);

if (specification.domain_errors.length +  specification.endpoint_errors.length == 0)
  console.log("The specification contains no errors in any of the " + specification.endpoints.length + " endpoints");

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
