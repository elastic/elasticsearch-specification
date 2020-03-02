import { RestSpecMapping } from "./specification/rest-spec-mapping";
declare namespace Domain {
    class Type {
        name: string;
        constructor(name: string);
        nullable: boolean;
    }
    class ArrayOf {
        type: Type;
        of: InstanceOf;
    }
    class Dictionary {
        type: Type;
        key: InstanceOf;
        value: InstanceOf;
    }
    class UnionOf {
        type: Type;
        items: InstanceOf[];
    }
    type InstanceOf = Type | ArrayOf | Dictionary | UnionOf;
    class TypeDeclaration {
        name: string;
        constructor(name: string);
    }
    class Interface extends TypeDeclaration {
        properties: InterfaceProperty[];
        inheritsFromUnresolved: string[];
        inherits: Domain.Interface[];
    }
    class InterfaceProperty {
        name: string;
        constructor(name: string);
        type: InstanceOf;
    }
    class Enum extends TypeDeclaration {
        name: string;
        flags: boolean;
        constructor(name: string, flags?: boolean);
        members: EnumMember[];
    }
    class EnumMember {
        name: string;
        constructor(name: string);
    }
    class BodyDocumentation {
        description: string;
        required: boolean;
        constructor(data: any);
    }
    class Documentation {
        description: string;
        url: string;
        constructor(data: any);
    }
    enum Stability {
        stable = 0,
        beta = 1,
        experimental = 2
    }
    class Deprecation {
        version: string;
        description: string;
        constructor(data: any);
    }
    class Endpoint {
        name: string;
        typeMapping: RestSpecMapping;
        documentation: Documentation;
        stability: Stability;
        body: BodyDocumentation;
        url: Url;
        queryStringParameters: QueryStringParameter[];
        deprecated: Deprecation;
        constructor(file: string, restSpecMapping: {
            [p: string]: RestSpecMapping;
        });
    }
    class UrlPath {
        path: string;
        methods: string[];
        parts: RoutePart[];
        deprecated: Deprecation;
        constructor(data: any);
    }
    class Url {
        paths: UrlPath[];
        constructor(data: any);
    }
    class RestSpecTypeConverter {
        static toQueryStringType(name: string, specType: string): string;
        static toRouteParamType(name: string, specType: string): string;
    }
    class QueryStringParameter {
        name: string;
        type: string;
        description: string;
        required: boolean;
        default: boolean;
        constructor(name: string, data: any);
    }
    class RoutePart {
        name: string;
        type: string;
        description: string;
        required: boolean;
        constructor(name: string, data: any);
    }
}
export = Domain;
