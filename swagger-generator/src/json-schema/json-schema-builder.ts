import {Specification} from "../../../specification/src/api-specification";
import * as Domain from "../../../specification/src/domain";
import {Schema} from "swagger-schema-official";

export type Definitions = { [p: string]: Schema};

export class JsonSchemaBuilder {
  constructor(private specification: Specification) { }

  private createEnumSchema(enumType: Domain.Enum): Schema {
    return {
      type: "string",
      description: enumType.flags ? "flags" : null,
      enum: enumType.members.map(e => e.name)
    };
  }

  private createTypeSchema(type: Domain.Type): Schema {
    if (type.name === "boolean") return { type: "boolean" };
    if (type.name === "string") return { type: "string" };

    return {$ref: "#/definitions/" + type.name};
  }

  private createArraySchema(arr: Domain.ArrayOf): Schema {
    return { type: "array", items: this.dispatchInstanceOf(arr.of) };
  }

  private createDictionarySchema(dict: Domain.Dictionary): Schema {
    // todo handle additionalProperties and find out how we can type the key.
    return {
      type: "object",
      additionalProperties: this.dispatchInstanceOf(dict.value)
    };
  }

  private createInterfaceProperty(property: Domain.InterfaceProperty): Schema {
    return this.dispatchInstanceOf(property.type);
  }

  private dispatchInstanceOf(type: Domain.InstanceOf): Schema {
    if (type instanceof Domain.Dictionary) return this.createDictionarySchema(type);
    if (type instanceof Domain.Type) return this.createTypeSchema(type);
    if (type instanceof Domain.ArrayOf) return this.createArraySchema(type);
    return { type: "object", description: "Unknown InstanceOf" };
  }
  private dispatchInterface(i: Domain.Interface): Schema {
    if (i.inheritsFromUnresolved.some(t => t === "String")) return { type: "string", format: i.name };

    switch (i.name) {
      case "Uri" : return { type: "string", format: "uri" };
      case "Date" : return { type: "string", format: "date-time" };
      case "TimeSpan" : return { type: "string", format: "time" };
      case "SourceDocument" : return { type: "object" };
      case "short" :
      case "byte" :
      case "integer" :
      case "long" :
        return { type: "integer", format: i.name };
      case "float" :
      case "double" :
        return { type: "number", format: i.name};
    }
    return {
      type: "object",
      properties: i.properties.reduce((o, p) => ({...o, [p.name]: this.createInterfaceProperty(p)}), {})
    };
  }

  private toSchema(type: Domain.TypeDeclaration): Schema {
    if (type instanceof Domain.Enum) return this.createEnumSchema(type);
    if (type instanceof Domain.Interface) return this.dispatchInterface(type);
    return { type: "object", description: "Unknown TypeDeclaration" };
  }

  build(): Definitions {
    return this.specification.types.reduce((o, t) => ({...o, [t.name]: this.toSchema(t)}), {});
  }
}
