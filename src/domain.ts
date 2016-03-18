module Domain {
  export class Type
  {
    constructor(public name: string) {}
    nullable: boolean;
  }
  export class Array
  {
    type = new Type("array");
    of: Type|Array|Map;
  }
  export class Map
  {
    type = new Type("map");
    key: Type|Array|Map;
    value: Type|Array|Map;
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
    type: Type|Array|Map;
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

  }

}
export = Domain;
