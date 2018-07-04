import { Specification } from "../../specification/src/api-specification";
export declare class SwaggerGenerator {
    private specification;
    constructor(specification: Specification);
    export(folder: string): void;
}
