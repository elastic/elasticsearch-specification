class Type
{
  name: string;
  nullable: boolean;
}

class TypeDeclaration
{
  name: string;
}

class Interface extends TypeDeclaration
{
  properties: InterfaceProperty[];
}

class InterfaceProperty
{
  name: string;
  type: Type;
}

class Enum extends TypeDeclaration
{
  members: EnumMember[];
  flags: boolean;
}

class EnumMember
{
  name: string;
}
