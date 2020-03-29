import { RestSpecMapping } from "./rest-spec-mapping";
import * as ts from "byots";
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
    private visit;
}
