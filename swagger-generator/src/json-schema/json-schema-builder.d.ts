import { Specification } from "../../../specification/src/api-specification";
import { Schema } from "swagger-schema-official";
export declare type Definitions = {
    [p: string]: Schema;
};
export declare class JsonSchemaBuilder {
    private specification;
    constructor(specification: Specification);
    private createEnumSchema(enumType);
    private createTypeSchema(type);
    private createArraySchema(arr);
    private createDictionarySchema(dict);
    private createName(i);
    private createUnionOfSchema(union);
    private createInterfaceProperty(property);
    private dispatchInstanceOf(type);
    private dispatchInterface(i);
    private toSchema(type);
    build(): Definitions;
}
