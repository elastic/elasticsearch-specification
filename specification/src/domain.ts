import {RestSpecMapping} from "./specification/rest-spec-mapping";
var _: _.LoDashStatic = require('lodash');

module Domain {
  export class Type
  {
    constructor(public name: string) {}
    nullable: boolean;
  }
  export class Array
  {
    type = new Type("array");
    of: InstanceOf;
  }
  export class Dictionary
  {
    type = new Type("dictionary");
    key: InstanceOf;
    value: InstanceOf;
    array: boolean;
  }
  export type InstanceOf = Type|Array|Dictionary;

  export class TypeDeclaration
  {
    constructor(public name: string) {}
  }

  export class Interface extends TypeDeclaration
  {
    public properties: InterfaceProperty[] = [];
    public inheritsFromUnresolved: string[] = [];
    public inherits: Domain.Interface[] = [];
  }

  export class InterfaceProperty
  {
    constructor(public name: string) {}
    type: InstanceOf;
  }

  export class Enum extends TypeDeclaration
  {
    constructor(public name: string, public flags : boolean = false) { super(name) }
    members: EnumMember[] = [];
  }

  export class EnumMember
  {
    constructor(public name: string) {}
  }

  export class BodyDocumentation
  {
    description: string;
    required: boolean;
    constructor(data: any)
    {
      this.description = data.description;
      this.required = !!data.required;
    }
  }

  export class Endpoint
  {
    name: string;
    documentation: string;
    bodyDocumentation: BodyDocumentation;
    methods: string[];
    url: Route;
    typeMapping: RestSpecMapping;

    constructor(file: string, restSpecMapping: { [p: string]: RestSpecMapping })
    {
      const json = require(file);

      this.name = _(json).keys().first();
      this.typeMapping = restSpecMapping[this.name];
      const data = json[this.name];
      if(!data.url) console.log(this.name);

      this.documentation = data.documentation;
      this.methods = data.methods;
      if (data.body)
        this.bodyDocumentation  = new BodyDocumentation(data.body);

      this.url = new Route(data.url);
    }
  }

  export class Route
  {
    path: string;
    paths: string[];
    parts: RoutePart[];

    constructor (data: any)
    {
      this.path = data.path;
      this.paths = data.paths;
      this.parts = _(data.parts).map((v, k)=>new RoutePart(v, k)).value();
    }
  }

  export class RoutePart
  {
    name: string;
    type: string;
    description: string;
    required: boolean;

    constructor (name: string, data: any)
    {
      this.name = name;
      this.type = data.type;
      this.description = data.description;
      this.required = !!data.required;
    }
  }

}
export = Domain;
