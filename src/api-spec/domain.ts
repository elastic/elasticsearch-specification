module Domain {
  export class Type
  {
    name: string;
    nullable: boolean;
  }

  export class TypeDeclaration
  {
    name: string;
  }

  export class Interface extends TypeDeclaration
  {
    properties: InterfaceProperty[];
  }

  export class InterfaceProperty
  {
    name: string;
    type: Type;
  }

  export class Enum extends TypeDeclaration
  {
    members: EnumMember[];
    flags: boolean;
  }

  export class EnumMember
  {
    name: string;
  }
}
export = Domain;
