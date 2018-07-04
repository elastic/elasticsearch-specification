import Domain = require("./domain");
import SpecValidator = require("./specification/validator");
import TypeReader = require("./specification/type-reader");
import {RestSpecMapping} from "./specification/rest-spec-mapping";
//will be marked as unused but the require is what brings in the global `ts` variable
const typescript = require('ntypescript');

const _: _.LoDashStatic = require('lodash');
const glob = require("glob");

module ApiSpecification
{
  export type TypeDictionary = { [p:string]:  Domain.TypeDeclaration };
  export class Specification
  {
    private specsFolder = __dirname + "/../specs";
    private configPath = this.specsFolder + "/tsconfig.json";
    private readonly program: ts.Program;

    types: Domain.TypeDeclaration[] = [];
    domain_errors: string[] = [];

    endpoints: Domain.Endpoint[] = [];
    endpoint_errors: string[] = [];

    private constructor(validate: boolean)
    {
      const config = ts.readConfigFile(this.configPath, file => ts.sys.readFile(file));
      const commandLine = ts.parseJsonConfigFileContent(config.config, ts.sys, this.specsFolder);
      this.program = ts.createProgram(commandLine.fileNames, commandLine.options);

      if (validate)
      {
        this.domain_errors = new SpecValidator().validate(this.program);
        if (this.domain_errors.length > 0)
        {
          const errorString = _(["The specification contains the following type mapping errors:"])
            .concat(_(this.domain_errors).map(e =>  "  - " + e))
            .join("\n");
          throw Error(errorString);
        }
      }

      const specVisitor = new TypeReader(this.program);
      let types = [].concat(specVisitor.interfaces).concat(specVisitor.enums);
      //resolve inherits by creating the proper pointers to instances, pretty hairy but it works
      let dictTypes = types.reduce((o, p) => ({...o, [p.name]: p}), {} ) as TypeDictionary;
      types.forEach(t=> {
        if (!(t instanceof Domain.Interface)) return;
        t.inherits = t.inheritsFromUnresolved
          .map(i=>i == "String" ? new Domain.Interface("String") : (dictTypes[i] as Domain.Interface));
      });
      this.types = types;

      const endpointReader = new EndpointReader(specVisitor.interfaces, specVisitor.restSpecMapping);
      this.endpoints = endpointReader.endpoints;
    }
    static load = () => new Specification(false);
    static loadWithValidation = () => new Specification(true);
  }
  export let loadWithValidation = Specification.loadWithValidation;
  export let load = Specification.load;

  export class EndpointReader
  {
    endpoints: Domain.Endpoint[];

    constructor(types: Domain.Interface[], restSpecMapping: { [p: string]: RestSpecMapping })
    {
      this.endpoints = _(glob.sync(__dirname + "/../specs/**/*.json"))
        .filter(f=>!f.match(/tsconfig/))
        .map(f=>new Domain.Endpoint(f, restSpecMapping))
        .value();
    }
  }
}
export = ApiSpecification
