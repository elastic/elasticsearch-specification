import Domain = require("../domain");
declare class TypeReader {
    private program;
    private checker;
    interfaces: Domain.Interface[];
    enums: Domain.Enum[];
    constructor(program: ts.Program);
    private visit(node);
}
export = TypeReader;
