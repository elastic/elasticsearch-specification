import {Specification} from "../specification/src/api-specification";
import * as fs from "fs";
import * as path from "path";
import * as Domain from "elasticsearch-client-specification/src/domain";

export class FlightRecorderJsonGenerator {
  constructor(private specification: Specification) { }

  export(folder: string) {

    const f = path.join(__dirname, folder);
    this.specification.endpoints.forEach(api => {
      const pathPrefix = path.join(f, api.name);
      const request = this.toType(api.typeMapping.request);
      fs.writeFileSync(pathPrefix + "_request.json", JSON.stringify(request, null, 2));
      const response = this.toType(api.typeMapping.response);
      fs.writeFileSync(pathPrefix + "_response.json", JSON.stringify(response, null, 2));
    });

  }
  private toType(typeName: string) {
    const type = this.specification.typeLookup[typeName];
    return this.toSchema(type);
 }

 private dispatchInterface(i: Domain.Interface) {
    if (i.inheritsFromUnresolved.some(t => t === "String")) return "__" + i.name + "__";

    switch (i.name) {
      case "Uri" : return "__uri__";
      case "Date" : return "__date__";
      case "TimeSpan" : return "__duration__";
      case "SourceDocument" : return "__source__";
      case "short" :
      case "byte" :
      case "integer" :
      case "long" :
      case "float" :
      case "double" :
        return i.name;
    }
    return i.properties.reduce((o, p) => ({...o, [p.name]: this.createInterfaceProperty(p)}), {});
  }

  private createEnumSchema(enumType: Domain.Enum) {
    return {
      type: "string",
      description: enumType.flags ? "flags" : null,
      enum: enumType.members.map(e => e.name)
    };
  }

  private createTypeSchema(type: Domain.Type) {
    if (type.name === "boolean") return "boolean";
    if (type.name === "string") return "string";

    const i = this.specification.typeLookup[type.name];
    return {}
    // return this.toSchema(i);
  }

  private createArraySchema(arr: Domain.ArrayOf) {
    return [this.dispatchInstanceOf(arr.of)];
  }

  private createDictionarySchema(dict: Domain.Dictionary) {
    // todo handle additionalProperties and find out how we can type the key.
    return { __name__ : this.dispatchInstanceOf(dict.value) };
  }

  private createInterfaceProperty(property: Domain.InterfaceProperty) {
    return this.dispatchInstanceOf(property.type);
  }

  private createUnionOfSchema(union: Domain.UnionOf) {
    // union should be oneOf but open api does not support the full json-schema draft 4
    return { __anyOf__ : [
      union.items.map(i => this.dispatchInstanceOf(i))
    ] };
  }

  private dispatchInstanceOf(type: Domain.InstanceOf) {
    if (type instanceof Domain.Dictionary) return this.createDictionarySchema(type);
    if (type instanceof Domain.UnionOf) return this.createUnionOfSchema(type);
    if (type instanceof Domain.Type) return this.createTypeSchema(type);
    if (type instanceof Domain.ArrayOf) return this.createArraySchema(type);
    return { type: "object", description: "Unknown InstanceOf" };
  }
  private toSchema(type: Domain.TypeDeclaration) {
    if (type instanceof Domain.Enum) return this.createEnumSchema(type);
    if (type instanceof Domain.Interface) return this.dispatchInterface(type);
    return { type: "object", description: "Unknown TypeDeclaration" };
  }
}
