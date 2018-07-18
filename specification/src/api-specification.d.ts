import Domain = require("./domain");
import { RestSpecMapping } from "./specification/rest-spec-mapping";
export declare type TypeDictionary = {
    [p: string]: Domain.TypeDeclaration;
};
export declare class Specification {
    private specsFolder;
    private configPath;
    private readonly program;
    types: Domain.TypeDeclaration[];
    domain_errors: string[];
    endpoints: Domain.Endpoint[];
    endpoint_errors: string[];
    private constructor();
    static load: () => Specification;
    static loadWithValidation: () => Specification;
}
export declare class EndpointReader {
    endpoints: Domain.Endpoint[];
    constructor(types: Domain.Interface[], restSpecMapping: {
        [p: string]: RestSpecMapping;
    });
}
