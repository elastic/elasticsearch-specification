import {Specification} from "../specification/src/api-specification";
import * as fs from "fs";
import * as path from "path";
import * as Domain from "elasticsearch-client-specification/src/domain";

export class FlightRecorderJsonGenerator {
  constructor(private specification: Specification) { }

  export(folder: string) {
    const f = path.join(__dirname, folder);
    if (!fs.existsSync(f))
      fs.mkdirSync(f);
    this.specification.endpoints.forEach(api => {
      const pathPrefix = path.join(f, api.name);
      const request = {
        api: api.name,
        args: {
          body: this.createRequestResponse(api.typeMapping.request)
        }
      };
      fs.writeFileSync(pathPrefix + "_request.json", JSON.stringify(request, null, 2));
      const response = {
        api: api.name,
        headers: {},
        payload: {
          body: this.createRequestResponse(api.typeMapping.response)

        },
        statusCode: [200]
      };
      fs.writeFileSync(pathPrefix + "_response.json", JSON.stringify(response, null, 2));
    });

  }
  private createRequestResponse(typeName: string) {
    const type = this.lookupType(typeName);
    const seenTypes = new Set<string>();
    seenTypes.add(typeName);
    return this.toSchema(type, seenTypes, typeName);
 }

 private dispatchInterface(i: Domain.Interface, seenTypes: Set<string>) {
    if (i.inheritsFromUnresolved.some(t => t === "String")) return "__" + i.name + "__";
    const valueType = FlightRecorderJsonGenerator.createValueType(i.name);
    if (valueType !== null) return valueType;

    return i.properties.reduce((o, p) => ({...o, [p.name]: this.createInterfaceProperty(p, seenTypes)}), {});
  }

  private static createValueType(typeName) {
    switch (typeName) {
      case "Uri" : return "__uri__";
      case "Date" : return "__date__";
      case "TimeSpan" : return "__duration__";
      case "TDocument" :
      case "TPartialDocument" :
      case "SourceDocument" : return "__source__";
      case "T" : return "__value__";
      case "TResult" : return "__value__";
      case "string" :
      case "boolean" :
      case "short" :
      case "byte" :
      case "integer" :
      case "long" :
      case "float" :
      case "double" :
        return typeName;
      case "object" :
        return {}
    }
    return null
  }

  private static createEnumSchema(enumType: Domain.Enum) {
    return {
      type: "string",
      description: enumType.flags ? "flags" : null,
      enum: enumType.members.map(e => e.name)
    };
  }

  private lookupType(typeName) {
    let i = this.specification.typeLookup[typeName];
    if (i != null) return i;
    typeName = typeName.replace(/<.+$/, "");
    i = this.specification.typeLookup[typeName];
    if (i == null && typeName !== "object" &&
      (!typeName.endsWith("Response") && !typeName.endsWith("Request")))
      throw Error("Can not find " + typeName);
    return i;
  }

  private createTypeSchema(type: Domain.Type, seenTypes) {
    const valueType = FlightRecorderJsonGenerator.createValueType(type.name);
    if (valueType !== null) return valueType;

    if (seenTypes.has(type.name)) return { $type: `Circular reference to: ${type.name}`};
    seenTypes.add(type.name);

    const i = this.lookupType(type.name);
    return this.toSchema(i, seenTypes, type.name);
  }

  private createArraySchema(arr: Domain.ArrayOf, seenTypes) {
    return [this.dispatchInstanceOf(arr.of, seenTypes)];
  }

  private createDictionarySchema(dict: Domain.Dictionary, seenTypes: Set<string>) {
    // todo handle additionalProperties and find out how we can type the key.
    return { __name__ : this.dispatchInstanceOf(dict.value, seenTypes) };
  }

  private createInterfaceProperty(property: Domain.InterfaceProperty, seenTypes: Set<string>) {
    return this.dispatchInstanceOf(property.type, seenTypes);
  }

  private createUnionOfSchema(union: Domain.UnionOf, seenTypes: Set<string>) {
    // union should be oneOf but open api does not support the full json-schema draft 4
    return { __anyOf__ : [
      union.items.map(i => this.dispatchInstanceOf(i, seenTypes))
    ] };
  }

  private dispatchInstanceOf(type: Domain.InstanceOf, seenTypes: Set<string>) {

    if (type instanceof Domain.Dictionary) return this.createDictionarySchema(type, seenTypes);
    if (type instanceof Domain.UnionOf) return this.createUnionOfSchema(type, seenTypes);
    if (type instanceof Domain.Type) return this.createTypeSchema(type, seenTypes);
    if (type instanceof Domain.ArrayOf) return this.createArraySchema(type, seenTypes);
    return { type: "object", description: "Unknown InstanceOf" };
  }
  private toSchema(type: Domain.TypeDeclaration, seenTypes: Set<string>, lastAddedType: string) {
    if (type instanceof Domain.Enum) return FlightRecorderJsonGenerator.createEnumSchema(type);
    if (type instanceof Domain.Interface) return this.dispatchInterface(type, seenTypes);
    return { type: "object", description: "undefined in spec" + lastAddedType};
  }
}
