/*
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
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.compileSpecification = exports.compileEndpoints = void 0;
const fs_1 = require("fs");
const path_1 = require("path");
const ts_morph_1 = require("ts-morph");
const json_spec_1 = __importDefault(require("./json-spec"));
const utils_1 = require("./utils");
const specsFolder = (0, path_1.join)(__dirname, '..', '..', '..', 'specification');
const tsConfigFilePath = (0, path_1.join)(specsFolder, 'tsconfig.json');
const jsonSpec = (0, json_spec_1.default)();
function compileEndpoints() {
    var _a;
    const map = {};
    for (const [api, spec] of jsonSpec.entries()) {
        map[api] = {
            name: api,
            description: spec.documentation.description,
            docUrl: spec.documentation.url,
            stability: spec.stability,
            visibility: spec.visibility,
            request: null,
            requestBodyRequired: Boolean((_a = spec.body) === null || _a === void 0 ? void 0 : _a.required),
            response: null,
            urls: spec.url.paths.map(path => {
                return {
                    path: path.path,
                    methods: path.methods,
                    ...(path.deprecated != null && { deprecation: path.deprecated })
                };
            })
        };
    }
    return map;
}
exports.compileEndpoints = compileEndpoints;
function compileSpecification(endpointMappings) {
    var _a;
    const project = new ts_morph_1.Project({ tsConfigFilePath });
    (0, utils_1.verifyUniqueness)(project);
    const model = {
        types: new Array(),
        endpoints: new Array()
    };
    const declarations = {
        classes: new Array(),
        interfaces: new Array(),
        enums: new Array(),
        typeAliases: new Array()
    };
    const definedButNeverUsed = [];
    for (const sourceFile of project.getSourceFiles()) {
        for (const declaration of sourceFile.getClasses()) {
            if (utils_1.customTypes.includes((_a = declaration.getName()) !== null && _a !== void 0 ? _a : ''))
                continue;
            declarations.classes.push(declaration);
        }
        for (const declaration of sourceFile.getInterfaces()) {
            declarations.interfaces.push(declaration);
        }
        for (const declaration of sourceFile.getEnums()) {
            declarations.enums.push(declaration);
        }
        for (const declaration of sourceFile.getTypeAliases()) {
            declarations.typeAliases.push(declaration);
        }
    }
    (0, fs_1.writeFileSync)((0, path_1.join)(__dirname, '..', '..', '..', 'output', 'dangling-types', 'dangling.csv'), definedButNeverUsed.join('\n'), 'utf8');
    for (const api of jsonSpec.keys()) {
        model.endpoints.push(endpointMappings[api]);
    }
    for (const declaration of declarations.classes) {
        model.types.push(compileClassOrInterfaceDeclaration(declaration, endpointMappings, declarations.classes));
    }
    for (const declaration of declarations.interfaces) {
        model.types.push(compileClassOrInterfaceDeclaration(declaration, endpointMappings, declarations.classes));
    }
    for (const declaration of declarations.enums) {
        model.types.push((0, utils_1.modelEnumDeclaration)(declaration));
    }
    for (const declaration of declarations.typeAliases) {
        model.types.push((0, utils_1.modelTypeAlias)(declaration));
    }
    model.types.sort((a, b) => {
        if (a.name.namespace === b.name.namespace) {
            if (a.name.name > b.name.name)
                return 1;
            if (a.name.name < b.name.name)
                return -1;
            return 0;
        }
        if (a.name.namespace > b.name.namespace)
            return 1;
        if (a.name.namespace < b.name.namespace)
            return -1;
        return 0;
    });
    return model;
}
exports.compileSpecification = compileSpecification;
function compileClassOrInterfaceDeclaration(declaration, mappings, allClasses) {
    var _a, _b, _c, _d, _e, _f, _g;
    const name = declaration.getName();
    (0, utils_1.assert)(declaration, name != null, 'Anonymous definitions should not exists');
    if (name === 'Request') {
        (0, utils_1.assert)(declaration, ts_morph_1.Node.isInterfaceDeclaration(declaration), `Request definitions must be declared as interfaces: ${name}`);
    }
    if (name === 'Response') {
        (0, utils_1.assert)(declaration, ts_morph_1.Node.isClassDeclaration(declaration), `Response definitions must be declared as classes: ${name}`);
    }
    if (name === 'Request' || name === 'Response') {
        let type;
        const namespace = (0, utils_1.getNameSpace)(declaration);
        if (name === 'Request') {
            type = {
                specLocation: (0, utils_1.sourceLocation)(declaration),
                kind: 'request',
                name: { name, namespace },
                path: new Array(),
                query: new Array(),
                body: { kind: 'no_body' }
            };
            const response = {
                name: 'Response',
                namespace: (0, utils_1.getNameSpace)(declaration)
            };
            (0, utils_1.hoistRequestAnnotations)(type, declaration.getJsDocs(), mappings, response);
            const mapping = mappings[namespace.includes('_global') ? namespace.slice(8) : namespace];
            if (mapping == null) {
                throw new Error(`Cannot find url template for ${namespace}, very likely the specification folder does not follow the rest-api-spec`);
            }
            const urlTemplateParams = [...new Set(mapping.urls.flatMap(url => url.path.split('/')
                    .filter(part => part.includes('{'))
                    .map(part => part.slice(1, -1))))];
            const methods = [...new Set(mapping.urls.flatMap(url => url.methods))];
            let pathMember = null;
            let bodyProperties = [];
            let bodyValue = null;
            let bodyMember = null;
            for (const member of declaration.getMembers()) {
                (0, utils_1.assert)(member, ts_morph_1.Node.isPropertyDeclaration(member) || ts_morph_1.Node.isPropertySignature(member), 'Class and interfaces can only have property declarations or signatures');
                const property = visitRequestOrResponseProperty(member);
                if (property.name === 'path_parts') {
                    (0, utils_1.assert)(member, property.properties.length > 0, 'There is no need to declare an empty object path_parts, just remove the path_parts declaration.');
                    pathMember = member;
                    type.path = property.properties;
                }
                else if (property.name === 'query_parameters') {
                    (0, utils_1.assert)(member, property.properties.length > 0, 'There is no need to declare an empty object query_parameters, just remove the query_parameters declaration.');
                    type.query = property.properties;
                }
                else if (property.name === 'body') {
                    bodyMember = member;
                    (0, utils_1.assert)(member, methods.some(method => ['POST', 'PUT', 'DELETE'].includes(method)), `${namespace}.${name} can't have a body, allowed methods: ${methods.join(', ')}`);
                    if (property.valueOf != null) {
                        bodyValue = property.valueOf;
                    }
                    else {
                        (0, utils_1.assert)(member, property.properties.length > 0, 'There is no need to declare an empty object body, just remove the body declaration.');
                        bodyProperties = property.properties;
                    }
                }
                else {
                    (0, utils_1.assert)(member, false, `Unknown request property: ${property.name}`);
                }
            }
            for (const part of type.path) {
                (0, utils_1.assert)(pathMember, urlTemplateParams.includes(part.name), `The property '${part.name}' does not exist in the rest-api-spec ${namespace} url template`);
                if (type.query.map(p => p.name).includes(part.name)) {
                    const queryType = type.query.find(property => property != null && property.name === part.name);
                    if (!(0, utils_1.deepEqual)(queryType.type, part.type)) {
                        (0, utils_1.assert)(pathMember, part.codegenName != null, `'${part.name}' already exist in the query_parameters with a different type, you should define an @codegen_name.`);
                        (0, utils_1.assert)(pathMember, !type.query.map(p => p.name).includes(part.codegenName), `The codegen_name '${part.codegenName}' already exists as parameter in query_parameters.`);
                    }
                }
                if (bodyProperties.map(p => p.name).includes(part.name)) {
                    const bodyType = bodyProperties.find(property => property != null && property.name === part.name);
                    if (!(0, utils_1.deepEqual)(bodyType.type, part.type)) {
                        (0, utils_1.assert)(pathMember, part.codegenName != null, `'${part.name}' already exist in the body with a different type, you should define an @codegen_name.`);
                        (0, utils_1.assert)(pathMember, !bodyProperties.map(p => p.name).includes(part.codegenName), `The codegen_name '${part.codegenName}' already exists as parameter in body.`);
                    }
                }
            }
            if (bodyValue != null) {
                if (bodyValue.kind === 'instance_of' && bodyValue.type.name === 'Void') {
                    (0, utils_1.assert)(bodyMember, false, 'There is no need to use Void in requets definitions, just remove the body declaration.');
                }
                else {
                    const tags = (0, utils_1.parseJsDocTags)(bodyMember.getJsDocs());
                    (0, utils_1.assert)(bodyMember, tags.codegen_name != null, 'You should configure a body @codegen_name');
                    (0, utils_1.assert)(bodyMember.getJsDocs(), !type.path.map(p => p.name).concat(type.query.map(p => p.name)).includes(tags.codegen_name), `The codegen_name '${tags.codegen_name}' already exists as a property in the path or query.`);
                    type.body = {
                        kind: 'value',
                        value: bodyValue,
                        codegenName: tags.codegen_name
                    };
                }
            }
            else if (bodyProperties.length > 0) {
                type.body = { kind: 'properties', properties: bodyProperties };
            }
        }
        else {
            type = {
                specLocation: (0, utils_1.sourceLocation)(declaration),
                kind: 'response',
                name: { name, namespace: (0, utils_1.getNameSpace)(declaration) },
                body: { kind: 'no_body' }
            };
            for (const member of declaration.getMembers()) {
                (0, utils_1.assert)(member, ts_morph_1.Node.isPropertyDeclaration(member) || ts_morph_1.Node.isPropertySignature(member), 'Class and interfaces can only have property declarations or signatures');
                const property = visitRequestOrResponseProperty(member);
                if (property.name === 'body') {
                    if (property.valueOf != null) {
                        if (property.valueOf.kind === 'instance_of' && property.valueOf.type.name === 'Void') {
                            type.body = { kind: 'no_body' };
                        }
                        else {
                            type.body = { kind: 'value', value: property.valueOf };
                        }
                    }
                    else {
                        type.body = { kind: 'properties', properties: property.properties };
                    }
                }
                else {
                    (0, utils_1.assert)(member, false, 'Response.body is the only Response property supported');
                }
            }
        }
        if (declaration.getHeritageClauses().length > 0) {
            const attachedBehaviors = (0, utils_1.getAllBehaviors)(declaration);
            if (attachedBehaviors.length > 0) {
                type.attachedBehaviors = Array.from(new Set(((_a = type.attachedBehaviors) !== null && _a !== void 0 ? _a : []).concat(attachedBehaviors)));
            }
        }
        for (const inherit of declaration.getHeritageClauses()) {
            const extended = inherit.getTypeNodes()
                .map(t => t.getExpression())
                .map(t => { var _a; return (_a = t.getType().getSymbol()) === null || _a === void 0 ? void 0 : _a.getDeclarations()[0]; })[0];
            (0, utils_1.assert)(inherit, ts_morph_1.Node.isClassDeclaration(extended) || ts_morph_1.Node.isInterfaceDeclaration(extended), 'Should extend from a class or interface');
            type.inherits = (0, utils_1.modelInherits)(extended, inherit);
        }
        for (const typeParameter of declaration.getTypeParameters()) {
            type.generics = ((_b = type.generics) !== null && _b !== void 0 ? _b : []).concat({
                name: (0, utils_1.modelGenerics)(typeParameter),
                namespace: type.name.namespace
            });
        }
        if (type.body.kind === 'no_body' && type.inherits != null) {
            const parent = type.inherits.type;
            if (parent.name === 'RequestBase' && parent.namespace === '_types') {
            }
            else if (parent.name === 'CatRequestBase' && parent.namespace === 'cat._types') {
            }
            else {
                type.body = { kind: 'properties', properties: new Array() };
            }
        }
        return type;
    }
    else {
        const type = {
            specLocation: (0, utils_1.sourceLocation)(declaration),
            kind: 'interface',
            name: { name, namespace: (0, utils_1.getNameSpace)(declaration) },
            properties: new Array()
        };
        (0, utils_1.hoistTypeAnnotations)(type, declaration.getJsDocs());
        const variant = (0, utils_1.parseVariantNameTag)(declaration.getJsDocs());
        if (typeof variant === 'string') {
            type.variantName = variant;
        }
        const variants = (0, utils_1.parseVariantsTag)(declaration.getJsDocs());
        if (variants != null) {
            (0, utils_1.assert)(declaration.getJsDocs(), variants.kind === 'container', 'Interfaces can only use `container` variant kind');
            type.variants = variants;
        }
        for (const member of declaration.getMembers()) {
            (0, utils_1.assert)(member, ts_morph_1.Node.isPropertyDeclaration(member) || ts_morph_1.Node.isPropertySignature(member), 'Class and interfaces can only have property declarations or signatures');
            const property = (0, utils_1.modelProperty)(member);
            if (((_c = type.variants) === null || _c === void 0 ? void 0 : _c.kind) === 'container' && property.containerProperty == null) {
                (0, utils_1.assert)(member, !property.required, 'All @variants container properties must be optional');
            }
            type.properties.push(property);
        }
        if (declaration.getHeritageClauses().length > 0) {
            const attachedBehaviors = (0, utils_1.getAllBehaviors)(declaration);
            if (attachedBehaviors.length > 0) {
                type.attachedBehaviors = Array.from(new Set(((_d = type.attachedBehaviors) !== null && _d !== void 0 ? _d : []).concat(attachedBehaviors)));
            }
        }
        for (const inherit of declaration.getHeritageClauses()) {
            if (inherit.getToken() === ts_morph_1.ts.SyntaxKind.ExtendsKeyword) {
                const extended = inherit.getTypeNodes()
                    .map(t => t.getExpression())
                    .map(t => { var _a; return (_a = t.getType().getSymbol()) === null || _a === void 0 ? void 0 : _a.getDeclarations()[0]; })[0];
                (0, utils_1.assert)(inherit, ts_morph_1.Node.isClassDeclaration(extended) || ts_morph_1.Node.isInterfaceDeclaration(extended), 'Should extend from a class or interface');
                type.inherits = (0, utils_1.modelInherits)(extended, inherit);
            }
        }
        if (ts_morph_1.Node.isClassDeclaration(declaration)) {
            for (const implement of declaration.getImplements()) {
                if ((0, utils_1.isKnownBehavior)(implement)) {
                    type.behaviors = ((_e = type.behaviors) !== null && _e !== void 0 ? _e : []).concat((0, utils_1.modelBehaviors)(implement));
                }
                else {
                    type.implements = ((_f = type.implements) !== null && _f !== void 0 ? _f : []).concat((0, utils_1.modelImplements)(implement));
                }
            }
        }
        for (const typeParameter of declaration.getTypeParameters()) {
            type.generics = ((_g = type.generics) !== null && _g !== void 0 ? _g : []).concat({
                name: (0, utils_1.modelGenerics)(typeParameter),
                namespace: type.name.namespace
            });
        }
        return type;
    }
}
function visitRequestOrResponseProperty(member) {
    const properties = [];
    let valueOf = null;
    const name = member.getName();
    const value = member.getTypeNode();
    (0, utils_1.assert)(member, value != null, `The property ${name} is not defined`);
    if (ts_morph_1.Node.isTypeReference(value)) {
        valueOf = (0, utils_1.modelType)(value);
    }
    else {
        value.forEachChild(child => {
            (0, utils_1.assert)(child, ts_morph_1.Node.isPropertySignature(child) || ts_morph_1.Node.isPropertyDeclaration(child), `Children should be ${ts_morph_1.ts.SyntaxKind[ts_morph_1.ts.SyntaxKind.PropertySignature]} or ${ts_morph_1.ts.SyntaxKind[ts_morph_1.ts.SyntaxKind.PropertyDeclaration]} but is ${ts_morph_1.ts.SyntaxKind[child.getKind()]} instead`);
            properties.push((0, utils_1.modelProperty)(child));
        });
    }
    return { name, properties, valueOf };
}
