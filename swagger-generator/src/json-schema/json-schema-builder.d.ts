import { Specification } from "../../../specification/src/api-specification";
export declare type Definitions = {
    [p: string]: Schema;
};
import { Schema } from "swagger-schema-official";
export declare class JsonSchemaBuilder {
    private specification;
    constructor(specification: Specification);
    private createEnumSchema(enumType);
    private createTypeSchema(type);
    private createArraySchema(arr);
    private createDictionarySchema(dict);
    private createInterfaceProperty(property);
    private dispatchInstanceOf(type);
    private dispatchInterface(i);
    private toSchema(type);
    build(): Definitions;
}
