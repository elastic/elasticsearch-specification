import { RestSpecMapping } from "./rest-spec-mapping";
import Domain = require("../domain");
export declare class TypeReader {
    private program;
    private checker;
    interfaces: Domain.Interface[];
    enums: Domain.Enum[];
    restSpecMapping: {
        [id: string]: RestSpecMapping;
    };
    constructor(program: ts.Program);
    private visit(node);
}
