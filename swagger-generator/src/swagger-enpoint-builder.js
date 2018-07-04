"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SwaggerEndpointBuilder {
    constructor(specification) {
        this.specification = specification;
    }
    build() {
        let swaggerEndpoints = {};
        for (let e of this.specification.endpoints) {
            let apiName = e.name;
            for (let m in e.methods) {
                let method = e.methods[m].toLowerCase();
                for (let u in e.url.paths) {
                    let url = e.url.paths[u].toLowerCase();
                    if (swaggerEndpoints[url] == null)
                        swaggerEndpoints[url] = {};
                    swaggerEndpoints[url][method] = {};
                    let me = swaggerEndpoints[url][method];
                    me.tags = [apiName];
                    if (e.documentation)
                        me.externalDocs = { url: e.documentation };
                    me.consumes = ["application/json"];
                    me.produces = ["application/json"];
                    me.parameters = [];
                    if (e.bodyDocumentation) {
                        me.parameters.push({
                            in: "body",
                            name: "request",
                            description: e.bodyDocumentation ? e.bodyDocumentation.description : null,
                            required: e.bodyDocumentation ? e.bodyDocumentation.required : false,
                            schema: { '$ref': "#/definitions/" + e.typeMapping.request }
                        });
                    }
                    me.responses = {
                        200: {
                            description: "Request accepted and processed response",
                            schema: { '$ref': "#/definitions/" + e.typeMapping.response }
                        }
                    };
                }
            }
        }
        return swaggerEndpoints;
    }
}
exports.SwaggerEndpointBuilder = SwaggerEndpointBuilder;
//# sourceMappingURL=swagger-enpoint-builder.js.map