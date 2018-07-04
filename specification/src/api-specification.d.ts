import Domain = require("./domain");
import { RestSpecMapping } from "./specification/rest-spec-mapping";
declare module ApiSpecification {
    class Specification {
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
    let loadWithValidation: () => Specification;
    let load: () => Specification;
    class EndpointReader {
        endpoints: Domain.Endpoint[];
        constructor(types: Domain.Interface[], restSpecMapping: {
            [p: string]: RestSpecMapping;
        });
    }
}
export = ApiSpecification;
