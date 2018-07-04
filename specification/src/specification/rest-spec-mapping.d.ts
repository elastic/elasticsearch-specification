export declare type TypeName = string;
export declare type RestSpecName = string;
export declare class RestSpecMapping {
    spec: RestSpecName;
    request: TypeName;
    response: TypeName;
    constructor(spec: RestSpecName, request: TypeName, response: TypeName);
}
