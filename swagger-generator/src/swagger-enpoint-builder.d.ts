import { Specification } from "../../specification/src/api-specification";
import { Path } from "swagger-schema-official";
export declare type Paths = {
    [p: string]: Path;
};
export declare class SwaggerEndpointBuilder {
    private specification;
    constructor(specification: Specification);
    build(): Paths;
    private static createPath(e, url);
    private static createOperation(endpoint, url);
    private static getValidResponse(e);
    private static getResponses(e);
    private static toSchema(type);
}
