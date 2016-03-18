import Domain = require("./domain");
import SpecValidator = require("./specification/validator");
import TypeReader = require("./specification/type-reader");

var changeCase = require('change-case');
var mkdirp = require('mkdirp');
var typescript = require('ntypescript');
var _: _.LoDashStatic = require('lodash');
import fs = require('fs');

let specFolder = "./spec";

export class Specification
{
  types: Domain.TypeDeclaration[] = [];
  domain_errors: string[] = [];

  endpoints: Domain.Endpoint[] = [];
  endpoint_errors: string[] = [];

  constructor()
  {
    var validator = new SpecValidator();
    this.domain_errors = validator.validate();
    if (this.domain_errors.length > 0)
      return;

    var specVisitor = new TypeReader(validator.program);
    console.log(JSON.stringify(specVisitor, null, 2));
  }
}

class EndpointReader
{
  constructor()
  {
  }
}



function read() {

}
