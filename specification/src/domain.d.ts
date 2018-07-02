declare module Domain {
    class Type {
        name: string;
        constructor(name: string);
        nullable: boolean;
    }
    class Array {
        type: Type;
        of: Type | Array | Dictionary;
    }
    class Dictionary {
        type: Type;
        key: Type | Array | Dictionary;
        value: Type | Array | Dictionary;
        array: boolean;
    }
    class TypeDeclaration {
        name: string;
        constructor(name: string);
    }
    class Interface extends TypeDeclaration {
        properties: InterfaceProperty[];
    }
    class InterfaceProperty {
        name: string;
        constructor(name: string);
        typeString: string;
        type: Type | Array | Dictionary;
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
    class Endpoint {
        name: string;
        documentation: string;
        bodyDocumentation: string;
        methods: string[];
        url: Route;
        constructor(file: string);
    }
    class Route {
        path: string;
        paths: string[];
        parts: RoutePart[];
        constructor(data: any);
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
