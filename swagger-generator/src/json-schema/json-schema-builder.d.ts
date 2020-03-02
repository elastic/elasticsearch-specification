import { Specification } from "../../../specification/src/api-specification";
import { Schema } from "swagger-schema-official";
export declare type Definitions = {
    [p: string]: Schema;
};
export declare class JsonSchemaBuilder {
    private specification;
    constructor(specification: Specification);
    private createEnumSchema;
    private createTypeSchema;
    private createArraySchema;
    private createDictionarySchema;
    private createName;
    private createUnionOfSchema;
    private createInterfaceProperty;
    private dispatchInstanceOf;
    private dispatchInterface;
    private toSchema;
    build(): Definitions;
}
