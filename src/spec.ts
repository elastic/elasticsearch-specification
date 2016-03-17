import domain = require("./domain");
var changeCase = require('change-case');
var mkdirp = require('mkdirp');
var typescript = require('ntypescript');
var _: _.LoDashStatic = require('lodash');
import fs = require('fs');

let specFolder = "./spec";

class Endpoint
{

}

export class Specification
{
  errors: string[];
  endpoints: Endpoint[];
  types: domain.TypeDeclaration[];
  constructor()
  {
    var validator = new SpecValidator();
    this.errors = validator.errors;
    if (this.errors.length > 0)
      return;

    var specVisitor = new SpecVisitor(validator.program);
  }
}

class EndpointReader
{
  constructor()
  {
  }
}

class SpecValidator
{
  private configPath = "./specs/tsconfig.json";
  program: ts.Program;
  errors: string[] = [];
  constructor()
  {
    let config = ts.readConfigFile(this.configPath, file => ts.sys.readFile(file));
    let commandLine = ts.parseJsonConfigFileContent(config.config, ts.sys, "./specs");
    this.program = ts.createProgram(commandLine.fileNames, commandLine.options);
    let emitResult = this.program.emit();

    let allDiagnostics = ts.getPreEmitDiagnostics(this.program).concat(emitResult.diagnostics);
    for (let d of allDiagnostics)
    {
        let { line, character } = d.file.getLineAndCharacterOfPosition(d.start);
        let message = ts.flattenDiagnosticMessageText(d.messageText, '\n');
        let error = d.file.fileName + " " + line + 1 + "," + character + 1 + ":" + message;
        this.errors.push(error);
    }
  }
}

class SpecVisitor
{
  private checker: ts.TypeChecker;
  constructor(private program: ts.Program)
  {
    this.checker = this.program.getTypeChecker();
  }

  private createProgram()
  {
    for (const f of this.program.getSourceFiles()) {
      let declarations : any= f.getNamedDeclarations();
      let domainObjects : domain.TypeDeclaration[] = [];
      for (let i in declarations)
      {
        let name : string = i;
        let d: ts.Declaration[] = declarations[name];
        var dd : ts.Declaration = d[0];
        switch(dd.kind)
        {
          case ts.SyntaxKind.InterfaceDeclaration:
            var id : ts.InterfaceDeclaration = dd as ts.InterfaceDeclaration;
            var s = this.checker.getSymbolAtLocation(id);
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
      }
      console.log(f.fileName);
    }
  }
}


function read() {

}
