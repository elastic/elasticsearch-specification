import { Specification } from "../specification/src/api-specification";
export declare class FlightRecorderJsonGenerator {
    private specification;
    constructor(specification: Specification);
    export(folder: string): void;
    private toType;
    private dispatchInterface;
    private createEnumSchema;
    private createTypeSchema;
    private createArraySchema;
    private createDictionarySchema;
    private createInterfaceProperty;
    private createUnionOfSchema;
    private dispatchInstanceOf;
    private toSchema;
}
