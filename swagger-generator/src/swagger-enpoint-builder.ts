import {Specification} from "../../specification/src/api-specification";
import {Path, Schema, Operation, Response} from "swagger-schema-official";
import {Endpoint} from "../../specification/src/domain";

export type Paths = { [p: string]: Path};

export class SwaggerEndpointBuilder {

  constructor(private specification: Specification) { }

  public build(): Paths {
    return this.specification.endpoints
      .map(e => e.url.paths.map(p =>({ endpoint: e, path: p})))
      .reduce((a, paths) => a.concat(paths), [])
      .reduce((o, e) => ({...o, [e.path]: SwaggerEndpointBuilder.createPath(e.endpoint, e.path)}), {});
  }

  private static createPath(e: Endpoint, url: string) : Path {
    const path: Path = {
      parameters: e.url.queryStringParameters
        .map(q => ({
          in: "query",
          name: q.name,
          required: true,
          type: SwaggerEndpointBuilder.toSchema(q.type),
          description: q.description
        }))
    };
    if (e.bodyDocumentation) {
      path.parameters.push({
        in: "body",
        name: "request",
        description: e.bodyDocumentation ? e.bodyDocumentation.description : null,
        required: e.bodyDocumentation ? e.bodyDocumentation.required : false,
        schema: {$ref: "#/definitions/" + e.typeMapping.request}
      });
    }
    return e.methods
      .map(m => m.toLowerCase())
      .reduce((o, m) => ({...o, [m]: SwaggerEndpointBuilder.createOperation(e, url)}), path);
  }

  private static createOperation(endpoint: Endpoint, url: string) : Operation {
    const defaultContentTypes =["application/json"];
    return {
      responses: SwaggerEndpointBuilder.getResponses(endpoint),
      tags: [endpoint.name],
      consumes: defaultContentTypes,
      produces: defaultContentTypes,
      parameters: endpoint.url.parts
        .filter(p => !url.match(new RegExp("\{" + p.name + "\}")))
        .map(p => ({
          in: "path",
          name: p.name,
          required: true,
          type: SwaggerEndpointBuilder.toSchema(p.type),
          description: p.description
        })),
      externalDocs: endpoint.documentation ? {url: endpoint.documentation} : null
    };
  }

  private static getValidResponse(e): Response {
    return {
      description: "Request accepted and processed response",
      schema: {$ref: "#/definitions/" + e.typeMapping.response}
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
    return {$ref: "#/definitions/" + type};
  }
}
