"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SwaggerEndpointBuilder {
    constructor(specification) {
        this.specification = specification;
    }
    build() {
        return this.specification.endpoints
            .map(e => e.url.paths.map(p => ({ endpoint: e, path: p })))
            .reduce((a, paths) => a.concat(paths), [])
            .reduce((o, e) => (Object.assign({}, o, { [e.path.path]: SwaggerEndpointBuilder.createPath(e.endpoint, e.path) })), {});
    }
    static createPath(e, url) {
        const path = {
            parameters: e.queryStringParameters
                .map(SwaggerEndpointBuilder.urlQueryStringToParameter)
        };
        if (e.body)
            path.parameters.push(SwaggerEndpointBuilder.urlBodyToParameter(e));
        return url.methods
            .map(m => m.toLowerCase())
            .reduce((o, m) => (Object.assign({}, o, { [m]: SwaggerEndpointBuilder.createOperation(e, url) })), path);
    }
    static createOperation(endpoint, url) {
        const defaultContentTypes = ["application/json"];
        return {
            responses: SwaggerEndpointBuilder.getResponses(endpoint),
            tags: [endpoint.name],
            consumes: defaultContentTypes,
            produces: defaultContentTypes,
            parameters: url.parts
                .map(SwaggerEndpointBuilder.urlPartToParameter),
            externalDocs: endpoint.documentation ? { url: endpoint.documentation.url || "" } : null
        };
    }
    static urlBodyToParameter(e) {
        return {
            in: "body",
            name: "request",
            description: e.body ? e.body.description : null,
            required: e.body ? e.body.required : false,
            schema: { $ref: "#/definitions/" + e.typeMapping.request }
        };
    }
    static urlQueryStringToParameter(query) {
        const q = {
            in: "query",
            name: query.name,
            description: query.description
        };
        return SwaggerEndpointBuilder.amendSchema(q, query.type);
    }
    static urlPartToParameter(part) {
        const p = {
            in: "path",
            name: part.name,
            required: true,
            description: part.description
        };
        return SwaggerEndpointBuilder.amendSchema(p, part.type);
    }
    static amendSchema(p, type) {
        const schema = SwaggerEndpointBuilder.toSchema(type);
        return Object.assign({}, p, schema);
    }
    static getValidResponse(e) {
        let schema = e.typeMapping.response;
        if (schema.startsWith("Cat"))
            schema += "/properties/records";
        return {
            description: "Request accepted and processed response",
            schema: { $ref: "#/definitions/" + schema }
        };
    }
    static getResponses(e) {
        return {
            200: SwaggerEndpointBuilder.getValidResponse(e)
        };
    }
    static toSchema(type) {
        if (type === "boolean")
            return { type: "boolean" };
        if (type === "string")
            return { type: "string" };
        switch (type) {
            case "Uri": return { type: "string", format: "uri" };
            case "Date": return { type: "string", format: "date-time" };
            case "Time": return { type: "string", format: "time" };
            case "TimeSpan": return { type: "string", format: "time" };
            case "SourceDocument": return { type: "object" };
            case "short":
            case "byte":
            case "integer":
            case "long":
                return { type: "integer", format: type };
            case "float":
            case "double":
                return { type: "number", format: type };
        }
        return { type: "string", format: type };
    }
}
exports.SwaggerEndpointBuilder = SwaggerEndpointBuilder;
//# sourceMappingURL=swagger-enpoint-builder.js.map