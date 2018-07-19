import {Specification} from "../../specification/src/api-specification";
import {Path, Schema, Operation, Response, Parameter} from "swagger-schema-official";
import {Endpoint, QueryStringParameter, RoutePart} from "../../specification/src/domain";

export type Paths = { [p: string]: Path};

export class SwaggerEndpointBuilder {

  constructor(private specification: Specification) { }

  build(): Paths {
    return this.specification.endpoints
      .map(e => e.url.paths.map(p => ({ endpoint: e, path: p})))
      .reduce((a, paths) => a.concat(paths), [])
      .reduce((o, e) => ({...o, [e.path]: SwaggerEndpointBuilder.createPath(e.endpoint, e.path)}), {});
  }

  private static createPath(e: Endpoint, url: string): Path {
    const path: Path = {
      parameters: e.url.queryStringParameters
        .map(SwaggerEndpointBuilder.urlQueryStringToParameter)
    };

    if (e.bodyDocumentation)
      path.parameters.push(SwaggerEndpointBuilder.urlBodyToParameter(e));

    return e.methods
      .map(m => m.toLowerCase())
      .reduce((o, m) => ({...o, [m]: SwaggerEndpointBuilder.createOperation(e, url)}), path);
  }

  private static createOperation(endpoint: Endpoint, url: string): Operation {
    const defaultContentTypes = ["application/json"];
    return {
      responses: SwaggerEndpointBuilder.getResponses(endpoint),
      tags: [endpoint.name],
      consumes: defaultContentTypes,
      produces: defaultContentTypes,
      parameters: endpoint.url.parts
        .filter(p => url.match(new RegExp("\{" + p.name + "\}")))
        .map(SwaggerEndpointBuilder.urlPartToParameter),
      externalDocs: endpoint.documentation ? {url: endpoint.documentation} : null
    };
  }

  private static urlBodyToParameter(e: Endpoint) {
    return {
      in: "body",
      name: "request",
      description: e.bodyDocumentation ? e.bodyDocumentation.description : null,
      required: e.bodyDocumentation ? e.bodyDocumentation.required : false,
      schema: {$ref: "#/definitions/" + e.typeMapping.request }
    };
  }

  private static urlQueryStringToParameter(query: QueryStringParameter) {
    const q = {
      in: "query",
      name: query.name,
      description: query.description
    };
    return SwaggerEndpointBuilder.amendSchema(q, query.type);
  }
  private static urlPartToParameter(part: RoutePart) {
    const p = {
          in: "path",
          name: part.name,
          required: true,
          description: part.description
    };
    return SwaggerEndpointBuilder.amendSchema(p, part.type);
  }
  private static amendSchema(p: Parameter, type: string): Parameter {
    const schema = SwaggerEndpointBuilder.toSchema(type);
    return { ...p, ... schema } as Parameter;
  }

  private static getValidResponse(e): Response {
    let schema = e.typeMapping.response;
    if (schema.startsWith("Cat"))
      schema += "/properties/records";

    return {
      description: "Request accepted and processed response",
      schema: {$ref: "#/definitions/" + schema}
    };
  }

  private static getResponses(e): { [responseName: string]: Response } {
    return {
      200: SwaggerEndpointBuilder.getValidResponse(e)
    };
  }

  private static toSchema(type: string): Schema {
    if (type === "boolean") return { type: "boolean" };
    if (type === "string") return { type: "string" };
    switch (type) {
      case "Uri" : return { type: "string", format: "uri" };
      case "Date" : return { type: "string", format: "date-time" };
      case "Time" : return { type: "string", format: "time" };
      case "TimeSpan" : return { type: "string", format: "time" };
      case "SourceDocument" : return { type: "object" };
      case "short":
      case "byte":
      case "integer" :
      case "long" :
        return { type: "integer", format: type };
      case "float" :
      case "double" :
        return { type: "number", format: type};
    }
    return { type: "string", format: type };
    // $ref is valid here but swagger UI barfs.
    // return {$ref: "#/definitions/" + type};
  }
}
