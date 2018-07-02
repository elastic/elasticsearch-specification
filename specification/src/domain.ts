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
    of: Type|Array|Dictionary;
  }
  export class Dictionary
  {
    type = new Type("dictionary");
    key: Type|Array|Dictionary;
    value: Type|Array|Dictionary;
    array: boolean;
  }

  export class TypeDeclaration
  {
    constructor(public name: string) {}
  }

  export class Interface extends TypeDeclaration
  {
    public properties: InterfaceProperty[] = [];
  }

  export class InterfaceProperty
  {
    constructor(public name: string) {}
    typeString: string;
    type: Type|Array|Dictionary;
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

  export class Endpoint
  {
    name: string;
    documentation: string;
    bodyDocumentation: string;
    methods: string[];
    url: Route;

    constructor(file: string)
    {
      //var json = require(file.replace(/\.\//, "./../"));
      const json = require(file);

      this.name = _(json).keys().first();
      const data = json[this.name];
      if(!data.url) console.log(this.name);

      this.documentation = data.documentation;
      this.methods = data.methods;
      this.bodyDocumentation  = data.body;

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
