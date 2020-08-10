"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const api_specification_1 = require("../specification/src/api-specification");
const domain_1 = __importStar(require("elasticsearch-client-specification/src/domain"));
const specification = api_specification_1.Specification.load();
let typeDefinitions = '';
const stringTypes = [
    'ActionIds',
    'CategoryId',
    'Date',
    'Field',
    'Fields',
    'IndexMetrics',
    'IndexName',
    'Indices',
    'LongId',
    'Metrics',
    'Name',
    'Names',
    'Node',
    'NodeIds',
    'PropertyName',
    'RelationName',
    'ScrollId',
    'ScrollIds',
    'TaskId',
    'TimeSpan',
    'Timestamp',
    'TypeName',
    'Types',
    'Uri',
];
const numberTypes = [
    'short',
    'byte',
    'integer',
    'long',
    'float',
    'double'
];
const stringOrNumberTypes = [
    'Id',
    'Ids',
    'Routing'
];
const stringOrArrayOfStrings = [
    'StopWords'
];
const interfaceToSkip = [
    'KeyValue'
];
for (const type of specification.types) {
    if (type instanceof domain_1.default.RequestInterface) {
        typeDefinitions += buildRequestInterface(type) + '\n\n';
    }
    else if (type instanceof domain_1.default.Interface) {
        if (interfaceToSkip.includes(type.name))
            continue;
        typeDefinitions += buildInterface(type) + '\n\n';
    }
    else if (type instanceof domain_1.default.Enum) {
        typeDefinitions += buildEnum(type) + '\n\n';
    }
}
fs_1.default.writeFileSync(path_1.default.join(__dirname, '..', 'output', 'typescript', 'types.ts'), typeDefinitions.slice(0, -2));
function buildInterface(type) {
    if (stringTypes.includes(type.name)) {
        return `export type ${type.name} = string`;
    }
    if (numberTypes.includes(type.name)) {
        return `export type ${type.name} = number`;
    }
    if (stringOrNumberTypes.includes(type.name)) {
        return `export type ${type.name} = string | number`;
    }
    if (stringOrArrayOfStrings.includes(type.name)) {
        return `export type ${type.name} = string | string[]`;
    }
    let code = `export interface ${type.name}${buildGeneric(type)}${buildInherits(type)} {\n`;
    for (const property of type.properties) {
        if (property.type === undefined)
            continue;
        code += `  ${cleanPropertyName(property.name)}${property.nullable ? '?' : ''}: ${unwrapType(property.type)}\n`;
    }
    code += '}';
    return code;
}
function buildRequestInterface(type) {
    let code = `export interface ${type.name}${buildGeneric(type)} {\n`;
    if (type.path !== undefined) {
        for (const property of type.path) {
            if (property.type === undefined)
                continue;
            code += `  ${cleanPropertyName(property.name)}${property.nullable ? '?' : ''}: ${unwrapType(property.type)}\n`;
        }
    }
    if (type.queryParameters !== undefined) {
        for (const property of type.queryParameters) {
            if (property.type === undefined)
                continue;
            code += `  ${cleanPropertyName(property.name)}${property.nullable ? '?' : ''}: ${unwrapType(property.type)}\n`;
        }
    }
    if (type.body !== undefined) {
        if (Array.isArray(type.body)) {
            code += '  body: {\n';
            for (const property of type.body) {
                if (property.type === undefined)
                    continue;
                code += `    ${cleanPropertyName(property.name)}${property.nullable ? '?' : ''}: ${unwrapType(property.type)}\n`;
            }
            code += '  }\n';
        }
        else {
            code += `  body: ${unwrapType(type.body)}\n`;
        }
    }
    code += '}';
    return code;
}
function buildEnum(type) {
    if (process.env.ENUM_AS_UNION) {
        const types = type.members.map(member => {
            if (member.stringRepresentation === 'true' || member.stringRepresentation === 'false') {
                return member.stringRepresentation;
            }
            return `"${member.stringRepresentation}"`;
        });
        return `export type ${type.name} = ${types.join(' | ')}`;
    }
    let code = `export enum ${type.name} {\n`;
    for (const member of type.members) {
        code += `  ${cleanPropertyName(member.name)} = "${member.stringRepresentation}",\n`;
    }
    code += '}';
    return code;
}
function unwrapType(type) {
    if (type instanceof domain_1.ArrayOf) {
        return `${unwrapType(type.of)}[]`;
    }
    else if (type instanceof domain_1.Dictionary) {
        return `Record<${unwrapType(type.key)}, ${unwrapType(type.value)}>`;
    }
    else if (type instanceof domain_1.SingleKeyDictionary) {
        return `Record<string, ${unwrapType(type.value)}>`;
    }
    else if (type instanceof domain_1.UnionOf) {
        return type.items.map(unwrapType).join(' | ');
    }
    else if (type instanceof domain_1.ImplementsReference) {
        if (Array.isArray(type.closedGenerics) && type.closedGenerics.length > 1) {
            return `${type.type.name}<${type.closedGenerics.map(unwrapType).join(', ')}>`;
        }
        return type.type.name;
    }
    else {
        if (Array.isArray(type.closedGenerics) && type.closedGenerics.length > 0) {
            return `${type.name}<${type.closedGenerics.map(unwrapType).join(', ')}>`;
        }
        return type.name;
    }
}
function buildGeneric(type) {
    if (Array.isArray(type.openGenerics) && type.openGenerics.length > 0) {
        return `<${type.openGenerics.join(', ')}>`;
    }
    return '';
}
function buildInherits(type) {
    if (Array.isArray(type.inherits) && type.inherits.length > 0) {
        let code = ' extends ';
        for (const inherit of type.inherits) {
            code += unwrapType(inherit) + ', ';
        }
        return code.slice(0, -2);
    }
    return '';
}
function cleanPropertyName(name) {
    return name.includes('.') || name.includes('-') || name.match(/^(\d|\W)/)
        ? `"${name}"`
        : name;
}
//# sourceMappingURL=index.js.map