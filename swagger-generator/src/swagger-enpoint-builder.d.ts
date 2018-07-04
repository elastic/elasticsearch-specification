import { Specification } from "../../specification/src/api-specification";
import { Path } from "swagger-schema-official";
export declare type Paths = {
    [p: string]: Path;
};
export declare class SwaggerEndpointBuilder {
    private specification;
    constructor(specification: Specification);
    build(): Paths;
}
