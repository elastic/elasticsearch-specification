import { Specification } from "../../specification/src/api-specification";
import { Path } from "swagger-schema-official";
export declare type Paths = {
    [p: string]: Path;
};
export declare class SwaggerEndpointBuilder {
    private specification;
    constructor(specification: Specification);
    build(): Paths;
    private static createPath;
    private static createOperation;
    private static urlBodyToParameter;
    private static urlQueryStringToParameter;
    private static urlPartToParameter;
    private static amendSchema;
    private static getValidResponse;
    private static getResponses;
    private static toSchema;
}
