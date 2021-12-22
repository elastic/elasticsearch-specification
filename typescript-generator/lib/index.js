"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const fs_1 = require("fs");
const path_1 = require("path");
const model = JSON.parse((0, fs_1.readFileSync)((0, path_1.join)(__dirname, '..', '..', 'output', 'schema', 'schema.json'), 'utf8'));
const skipBehaviors = [
    'AdditionalProperties', 'AdditionalProperty', 'OverloadOf'
];
let definitions = `/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

`;
for (const type of model.types) {
    definitions += buildType(type) + '\n';
}
(0, fs_1.writeFileSync)((0, path_1.join)(__dirname, '..', '..', 'output', 'typescript', 'types.ts'), definitions, 'utf8');
function buildType(type) {
    switch (type.kind) {
        case 'interface':
            return buildInterface(type);
        case 'request':
            return buildRequest(type);
        case 'response':
            return buildResponse(type);
        case 'enum':
            return buildEnum(type);
        case 'type_alias':
            return buildTypeAlias(type);
    }
}
function buildValue(type, openGenerics, origin) {
    function equalTypeNames(t1, t2) {
        return t2 != null && (t1.name === t2.name && t1.namespace === t2.namespace);
    }
    function getShortcutType(value) {
        if (value.kind === 'instance_of') {
            const def = model.types.find(t => equalTypeNames(t.name, value.type));
            if ((def === null || def === void 0 ? void 0 : def.kind) === 'interface' && def.shortcutProperty != null) {
                const shortcutProp = def.properties.find(p => p.name === def.shortcutProperty);
                return shortcutProp === null || shortcutProp === void 0 ? void 0 : shortcutProp.type;
            }
        }
    }
    switch (type.kind) {
        case 'instance_of':
            if (Array.isArray(openGenerics) && openGenerics.includes(type.type.name)) {
                return type.type.name;
            }
            if (!equalTypeNames(type.type, origin)) {
                const shortcutType = getShortcutType(type);
                if (shortcutType != null) {
                    const union = {
                        kind: 'union_of',
                        items: [type, shortcutType]
                    };
                    return buildValue(union, openGenerics, type.type);
                }
            }
            if (type.type.name === 'binary' && type.type.namespace === 'internal') {
                return 'ArrayBuffer';
            }
            return `${createName(type.type)}${buildGenerics(type.generics, openGenerics)}`;
        case 'array_of':
            return type.value.kind === 'union_of' || getShortcutType(type.value) != null
                ? `(${buildValue(type.value, openGenerics)})[]`
                : `${buildValue(type.value, openGenerics)}[]`;
        case 'union_of':
            return type.items.map(t => buildValue(t, openGenerics, origin)).join(' | ');
        case 'dictionary_of': {
            const result = `Record<${buildValue(type.key, openGenerics)}, ${buildValue(type.value, openGenerics)}>`;
            return type.singleKey ? `Partial<${result}>` : result;
        }
        case 'user_defined_value':
            return 'any';
        case 'literal_value':
            return typeof type.value === 'string' ? `'${type.value}'` : type.value;
    }
}
function buildGenerics(types, openGenerics, noDefault = false) {
    if (!Array.isArray(types) || types.length === 0)
        return '';
    return `<${types.map(buildGeneric).join(', ')}>`;
    function buildGeneric(type) {
        if (isTypeName(type)) {
            return noDefault ? type.name : `${type.name} = unknown`;
        }
        else {
            if (type.kind === 'instance_of' && Array.isArray(openGenerics) && openGenerics.includes(type.type.name)) {
                return type.type.name;
            }
            return buildValue(type, openGenerics);
        }
    }
    function isTypeName(type) {
        return typeof type.name === 'string' && typeof type.namespace === 'string';
    }
}
function buildInherits(type, openGenerics) {
    var _a, _b;
    const inherits = (type.inherits != null ? [type.inherits] : []).filter(type => !skipBehaviors.includes(type.type.name));
    const interfaces = ((_a = type.implements) !== null && _a !== void 0 ? _a : []).filter(type => !skipBehaviors.includes(type.type.name));
    const behaviors = ((_b = type.behaviors) !== null && _b !== void 0 ? _b : []).filter(type => !skipBehaviors.includes(type.type.name));
    const extendAll = inherits.concat(interfaces).concat(behaviors)
        .filter(inherit => {
        for (const type of model.types) {
            if (inherit.type.name === type.name.name && inherit.type.namespace === type.name.namespace) {
                switch (type.kind) {
                    case 'interface':
                        return type.properties.length > 0 || type.inherits != null || type.implements != null || type.behaviors != null || type.generics != null;
                    case 'request':
                    case 'response':
                        return true;
                    default:
                        return false;
                }
            }
        }
        return true;
    });
    if (extendAll.length === 0)
        return '';
    return ` extends ${extendAll.map(buildInheritType).join(', ')}`;
    function buildInheritType(type) {
        return `${createName(type.type)}${buildGenerics(type.generics, openGenerics)}`;
    }
}
function buildInterface(type) {
    var _a, _b;
    if (implementsBehavior(type)) {
        return buildBehaviorInterface(type);
    }
    const openGenerics = (_b = (_a = type.generics) === null || _a === void 0 ? void 0 : _a.map(t => t.name)) !== null && _b !== void 0 ? _b : [];
    const inherits = buildInherits(type, openGenerics);
    let code = `export interface ${createName(type.name)}${buildGenerics(type.generics, openGenerics)}${inherits} {\n`;
    if (type.properties.length === 0 && type.attachedBehaviors == null && inherits.length === 0) {
        if (process.env.KIBANA == null) {
            code += '  [key: string]: never\n';
        }
    }
    else {
        for (const property of type.properties) {
            code += `  ${cleanPropertyName(property.name)}${required(property)}: ${buildValue(property.type, openGenerics)}\n`;
            if (Array.isArray(property.aliases)) {
                for (const alias of property.aliases) {
                    code += `  ${cleanPropertyName(alias)}${required(property)}: ${buildValue(property.type, openGenerics)}\n`;
                }
            }
        }
    }
    code += '}\n';
    return code;
    function required(p) {
        return p.required ? '' : '?';
    }
}
function implementsBehavior(type) {
    if (Array.isArray(type.attachedBehaviors)) {
        if (type.name.name.endsWith('Base')) {
            return false;
        }
        if (type.attachedBehaviors.includes('OverloadOf')) {
            return false;
        }
        return type.attachedBehaviors.length > 0;
    }
    return type.name.name === 'DictionaryResponseBase';
}
function buildBehaviorInterface(type) {
    if (Array.isArray(type.attachedBehaviors)) {
        if (type.attachedBehaviors.includes('AdditionalProperties') || type.attachedBehaviors.includes('AdditionalProperty')) {
            return serializeAdditionalPropertiesType(type);
        }
    }
    switch (type.name.name) {
        case 'DictionaryResponseBase':
            return `export interface DictionaryResponseBase<TKey = unknown, TValue = unknown> {
  [key: string]: TValue
}\n`;
        default:
            throw new Error(`Unknown interface ${type.name.name}`);
    }
}
function serializeAdditionalPropertiesType(type) {
    var _a, _b, _c;
    const dictionaryOf = (_a = lookupBehavior(type, 'AdditionalProperties')) !== null && _a !== void 0 ? _a : lookupBehavior(type, 'AdditionalProperty');
    if (dictionaryOf == null)
        throw new Error(`Unknown implements ${type.name.name}`);
    const extendedPropertyTypes = getAllExtendedPropertyTypes(type.inherits);
    const openGenerics = (_c = (_b = type.generics) === null || _b === void 0 ? void 0 : _b.map(t => t.name)) !== null && _c !== void 0 ? _c : [];
    let code = `export interface ${createName(type.name)}Keys${buildGenerics(type.generics)}${buildInherits(type)} {\n`;
    const types = [];
    for (const property of type.properties) {
        code += `  ${cleanPropertyName(property.name)}${required(property)}: ${buildValue(property.type, openGenerics)}\n`;
        types.push(buildValue(property.type, openGenerics));
    }
    code += '}\n';
    if (Array.isArray(dictionaryOf.generics) && dictionaryOf.generics[1].kind === 'user_defined_value') {
        code += `export type ${createName(type.name)}${buildGenerics(type.generics)} = ${createName(type.name)}Keys${buildGenerics(type.generics, openGenerics, true)}\n  & { [property: string]: any }\n`;
    }
    else {
        const dynamicTypes = Array.isArray(dictionaryOf.generics)
            ? [...new Set([buildValue(dictionaryOf.generics[1], openGenerics)].concat(types).concat(extendedPropertyTypes))]
            : [...new Set(types.concat(extendedPropertyTypes))];
        code += `export type ${createName(type.name)}${buildGenerics(type.generics)} = ${createName(type.name)}Keys${buildGenerics(type.generics, openGenerics, true)}\n  & { [property: string]: ${dynamicTypes.join(' | ')} }\n`;
    }
    return code;
    function getAllExtendedPropertyTypes(inherit) {
        var _a, _b;
        if (inherit == null)
            return [];
        const extendedInterface = model.types.find(type => inherit.type.name === type.name.name && inherit.type.namespace === type.name.namespace);
        (0, assert_1.default)(extendedInterface != null, `Can't find extended type for ${inherit.type.namespace}.${inherit.type.name}`);
        (0, assert_1.default)(extendedInterface.kind === 'interface', `We should be extending from another interface, instead got: ${extendedInterface.kind}`);
        const openGenerics = (_b = (_a = extendedInterface.generics) === null || _a === void 0 ? void 0 : _a.map(t => t.name)) !== null && _b !== void 0 ? _b : [];
        const types = [];
        for (const property of extendedInterface.properties) {
            types.push(buildValue(property.type, openGenerics));
        }
        types.push(...getAllExtendedPropertyTypes(extendedInterface.inherits));
        return [...new Set(types)];
    }
    function required(property) {
        return property.required ? '' : '?';
    }
}
function lookupBehavior(type, name) {
    var _a;
    if (!((_a = type.attachedBehaviors) === null || _a === void 0 ? void 0 : _a.includes(name)))
        return null;
    if (Array.isArray(type.behaviors)) {
        const behavior = type.behaviors.find(i => i.type.name === name);
        if (behavior != null)
            return behavior;
    }
    if (type.inherits == null)
        return null;
    const parentType = model.types.find(t => { var _a; return t.name.name === ((_a = type.inherits) === null || _a === void 0 ? void 0 : _a.type.name); });
    if (parentType == null)
        return null;
    if (parentType.kind === 'interface') {
        return lookupBehavior(parentType, name);
    }
    throw new Error('Should inherit from an interface');
}
function buildRequest(type) {
    var _a, _b;
    const openGenerics = (_b = (_a = type.generics) === null || _a === void 0 ? void 0 : _a.map(t => t.name)) !== null && _b !== void 0 ? _b : [];
    let code = `export interface ${createName(type.name)}${buildGenerics(type.generics, openGenerics)}${buildInherits(type, openGenerics)} {\n`;
    for (const property of type.path) {
        code += `  ${cleanPropertyName(property.name)}${property.required ? '' : '?'}: ${buildValue(property.type, openGenerics)}\n`;
    }
    const pathPropertiesNames = type.path.map(property => property.name);
    for (const property of type.query) {
        if (pathPropertiesNames.includes(property.name))
            continue;
        code += `  ${cleanPropertyName(property.name)}${property.required ? '' : '?'}: ${buildValue(property.type, openGenerics)}\n`;
    }
    if (type.body.kind === 'properties' && type.body.properties.length > 0) {
        code += `  body${isBodyRequired() ? '' : '?'}: {\n`;
        for (const property of type.body.properties) {
            code += `    ${cleanPropertyName(property.name)}${property.required ? '' : '?'}: ${buildValue(property.type, openGenerics)}\n`;
            if (Array.isArray(property.aliases)) {
                for (const alias of property.aliases) {
                    code += `    ${cleanPropertyName(alias)}${property.required ? '' : '?'}: ${buildValue(property.type, openGenerics)}\n`;
                }
            }
        }
        code += '  }\n';
    }
    else if (type.body.kind === 'value') {
        code += `  body${isBodyRequired() ? '' : '?'}: ${buildValue(type.body.value, openGenerics)}\n`;
    }
    code += '}\n';
    return code;
    function isBodyRequired() {
        for (const endpoint of model.endpoints) {
            if ((endpoint.request != null) && endpoint.request.name === type.name.name) {
                return endpoint.requestBodyRequired;
            }
        }
        return false;
    }
}
function buildResponse(type) {
    var _a, _b;
    const openGenerics = (_b = (_a = type.generics) === null || _a === void 0 ? void 0 : _a.map(t => t.name)) !== null && _b !== void 0 ? _b : [];
    if (type.body.kind === 'properties') {
        let code = `export interface ${createName(type.name)}${buildGenerics(type.generics, openGenerics)}${buildInherits(type, openGenerics)} {\n`;
        for (const property of type.body.properties) {
            code += `  ${cleanPropertyName(property.name)}${property.required ? '' : '?'}: ${buildValue(property.type, openGenerics)}\n`;
            if (Array.isArray(property.aliases)) {
                for (const alias of property.aliases) {
                    code += `    ${cleanPropertyName(alias)}${property.required ? '' : '?'}: ${buildValue(property.type, openGenerics)}\n`;
                }
            }
        }
        code += '}\n';
        return code;
    }
    else if (type.body.kind === 'no_body') {
        return `export type ${createName(type.name)}${buildGenerics(type.generics, openGenerics)} = boolean\n`;
    }
    else {
        return `export type ${createName(type.name)}${buildGenerics(type.generics, openGenerics)} = ${buildValue(type.body.value, openGenerics)}\n`;
    }
}
function buildEnum(type) {
    const names = type.members.reduce((accum, item) => {
        accum.push(item.name);
        if (item.aliases == null) {
            return accum;
        }
        else {
            return accum.concat(item.aliases);
        }
    }, new Array());
    const boolean = (names.includes('true') && names.includes('false')) ? 'boolean | ' : '';
    return `export type ${createName(type.name)} = ${boolean}${names.map(m => `'${m}'`).join(' | ')}\n`;
}
function buildTypeAlias(type) {
    var _a, _b;
    if (type.name.name === 'Id' && type.name.namespace === '_types') {
        return 'export type Id = string | number\n';
    }
    const openGenerics = (_b = (_a = type.generics) === null || _a === void 0 ? void 0 : _a.map(t => t.name)) !== null && _b !== void 0 ? _b : [];
    return `export type ${createName(type.name)}${buildGenerics(type.generics)} = ${buildValue(type.type, openGenerics)}\n`;
}
function createName(type) {
    if (type.namespace === 'internal')
        return type.name;
    const namespace = strip(type.namespace).replace(/_([a-z])/g, k => k[1].toUpperCase());
    return `${namespace.split('.').map(TitleCase).join('')}${type.name}`;
    function strip(namespace) {
        if (namespace.startsWith('_global')) {
            if (namespace.includes('_types')) {
                return namespace.slice(8).split('.').filter(n => n !== '_types').join('.');
            }
            return namespace.slice(8);
        }
        if (namespace.includes('_types')) {
            return namespace.split('.').filter(n => n !== '_types').join('.');
        }
        return namespace;
    }
    function TitleCase(str) {
        if (str.length === 0)
            return '';
        return str[0].toUpperCase() + str.slice(1);
    }
}
function cleanPropertyName(name) {
    return name.includes('.') || name.includes('-') || (name.match(/^(\d|\W)/) != null)
        ? `'${name}'`
        : name;
}
//# sourceMappingURL=index.js.map