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
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sourceLocation = exports.deepEqual = exports.isValidUrl = exports.verifyUniqueness = exports.assert = exports.isDefinedButNeverUsed = exports.parseVariantNameTag = exports.parseVariantsTag = exports.parseJsDocTags = exports.getAllBehaviors = exports.getNameSpace = exports.isKnownBehavior = exports.hoistTypeAnnotations = exports.hoistRequestAnnotations = exports.modelProperty = exports.modelTypeAlias = exports.modelEnumDeclaration = exports.modelGenerics = exports.modelBehaviors = exports.modelImplements = exports.modelInherits = exports.isApi = exports.modelType = exports.customTypes = exports.knownBehaviors = void 0;
const assert_1 = require("assert");
const ts_morph_1 = require("ts-morph");
const semver_1 = __importDefault(require("semver"));
const chalk_1 = __importDefault(require("chalk"));
const model = __importStar(require("./metamodel"));
const os_1 = require("os");
const path_1 = require("path");
exports.knownBehaviors = [
    'AdditionalProperties',
    'AdditionalProperty',
    'CommonQueryParameters',
    'CommonCatQueryParameters',
    'OverloadOf'
];
exports.customTypes = [
    'SingleKeyDictionary',
    'Dictionary',
    'UserDefinedValue'
];
function modelType(node) {
    switch (node.getKind()) {
        case ts_morph_1.ts.SyntaxKind.BooleanKeyword: {
            const type = {
                kind: 'instance_of',
                type: {
                    name: 'boolean',
                    namespace: 'internal'
                }
            };
            return type;
        }
        case ts_morph_1.ts.SyntaxKind.StringKeyword: {
            const type = {
                kind: 'instance_of',
                type: {
                    name: 'string',
                    namespace: 'internal'
                }
            };
            return type;
        }
        case ts_morph_1.ts.SyntaxKind.NumberKeyword: {
            const type = {
                kind: 'instance_of',
                type: {
                    name: 'number',
                    namespace: 'internal'
                }
            };
            return type;
        }
        case ts_morph_1.ts.SyntaxKind.NullKeyword: {
            const type = {
                kind: 'instance_of',
                type: {
                    name: 'null',
                    namespace: 'internal'
                }
            };
            return type;
        }
        case ts_morph_1.ts.SyntaxKind.VoidKeyword: {
            const type = {
                kind: 'instance_of',
                type: {
                    name: 'void',
                    namespace: 'internal'
                }
            };
            return type;
        }
        case ts_morph_1.ts.SyntaxKind.AnyKeyword: {
            const type = {
                kind: 'instance_of',
                type: {
                    name: 'object',
                    namespace: 'internal'
                }
            };
            return type;
        }
        case ts_morph_1.ts.SyntaxKind.ArrayType: {
            const kinds = [
                ts_morph_1.ts.SyntaxKind.StringKeyword,
                ts_morph_1.ts.SyntaxKind.BooleanKeyword,
                ts_morph_1.ts.SyntaxKind.AnyKeyword,
                ts_morph_1.ts.SyntaxKind.ArrayType,
                ts_morph_1.ts.SyntaxKind.TypeReference
            ];
            let children = [];
            node.forEachChild(child => children.push(child));
            children = children.filter(child => kinds.some(kind => kind === child.getKind()));
            assert(node, children.length === 1, `Expected array to have 1 usable child but saw ${children.length}`);
            const type = {
                kind: 'array_of',
                value: modelType(children[0])
            };
            return type;
        }
        case ts_morph_1.ts.SyntaxKind.UnionType: {
            assert(node, ts_morph_1.Node.isUnionTypeNode(node), `The node is not of type ${ts_morph_1.ts.SyntaxKind[ts_morph_1.ts.SyntaxKind.UnionType]} but ${ts_morph_1.ts.SyntaxKind[node.getKind()]} instead`);
            const type = {
                kind: 'union_of',
                items: node.getTypeNodes().map(node => modelType(node))
            };
            return type;
        }
        case ts_morph_1.ts.SyntaxKind.LiteralType: {
            assert(node, ts_morph_1.Node.isLiteralTypeNode(node), `The node is not of type ${ts_morph_1.ts.SyntaxKind[ts_morph_1.ts.SyntaxKind.LiteralType]} but ${ts_morph_1.ts.SyntaxKind[node.getKind()]} instead`);
            return modelType(node.getLiteral());
        }
        case ts_morph_1.ts.SyntaxKind.StringLiteral: {
            assert(node, ts_morph_1.Node.isStringLiteral(node), `The node is not of type ${ts_morph_1.ts.SyntaxKind[ts_morph_1.ts.SyntaxKind.StringLiteral]} but ${ts_morph_1.ts.SyntaxKind[node.getKind()]} instead`);
            const type = {
                kind: 'literal_value',
                value: node.getText().replace(/'/g, '')
            };
            return type;
        }
        case ts_morph_1.ts.SyntaxKind.TrueKeyword: {
            assert(node, ts_morph_1.Node.isTrueLiteral(node), `The node is not of type ${ts_morph_1.ts.SyntaxKind[ts_morph_1.ts.SyntaxKind.TrueKeyword]} but ${ts_morph_1.ts.SyntaxKind[node.getKind()]} instead`);
            const type = {
                kind: 'literal_value',
                value: true
            };
            return type;
        }
        case ts_morph_1.ts.SyntaxKind.FalseKeyword: {
            assert(node, ts_morph_1.Node.isFalseLiteral(node), `The node is not of type ${ts_morph_1.ts.SyntaxKind[ts_morph_1.ts.SyntaxKind.FalseKeyword]} but ${ts_morph_1.ts.SyntaxKind[node.getKind()]} instead`);
            const type = {
                kind: 'literal_value',
                value: false
            };
            return type;
        }
        case ts_morph_1.ts.SyntaxKind.NumericLiteral: {
            assert(node, ts_morph_1.Node.isNumericLiteral(node), `The node is not of type ${ts_morph_1.ts.SyntaxKind[ts_morph_1.ts.SyntaxKind.NumericLiteral]} but ${ts_morph_1.ts.SyntaxKind[node.getKind()]} instead`);
            const type = {
                kind: 'literal_value',
                value: Number(node.getText())
            };
            return type;
        }
        case ts_morph_1.ts.SyntaxKind.TypeParameter: {
            assert(node, ts_morph_1.Node.isTypeParameterDeclaration(node), `The node is not of type ${ts_morph_1.ts.SyntaxKind[ts_morph_1.ts.SyntaxKind.TypeReference]} but ${ts_morph_1.ts.SyntaxKind[node.getKind()]} instead`);
            const name = node.compilerNode.getText();
            const type = {
                kind: 'instance_of',
                type: {
                    name,
                    namespace: getNameSpace(node)
                }
            };
            return type;
        }
        case ts_morph_1.ts.SyntaxKind.TypeReference: {
            assert(node, ts_morph_1.Node.isTypeReferenceNode(node), `The node is not of type ${ts_morph_1.ts.SyntaxKind[ts_morph_1.ts.SyntaxKind.TypeReference]} but ${ts_morph_1.ts.SyntaxKind[node.getKind()]} instead`);
            const identifier = node.getTypeName();
            assert(node, ts_morph_1.Node.isIdentifier(identifier), 'Should be an identifier');
            const name = identifier.compilerNode.escapedText;
            switch (name) {
                case 'Array': {
                    assert(node, node.getTypeArguments().length === 1, 'An array must have one argument');
                    const [value] = node.getTypeArguments().map(node => modelType(node));
                    const type = {
                        kind: 'array_of',
                        value
                    };
                    return type;
                }
                case 'ArrayBuffer': {
                    const type = {
                        kind: 'instance_of',
                        type: {
                            name: 'binary',
                            namespace: 'internal'
                        }
                    };
                    return type;
                }
                case 'Dictionary':
                case 'AdditionalProperties': {
                    assert(node, node.getTypeArguments().length === 2, 'A Dictionary must have two arguments');
                    const [key, value] = node.getTypeArguments().map(node => modelType(node));
                    const type = {
                        kind: 'dictionary_of',
                        key,
                        value,
                        singleKey: false
                    };
                    return type;
                }
                case 'SingleKeyDictionary':
                case 'AdditionalProperty': {
                    assert(node, node.getTypeArguments().length === 2, 'A SingleKeyDictionary must have two arguments');
                    const [key, value] = node.getTypeArguments().map(node => modelType(node));
                    const type = {
                        kind: 'dictionary_of',
                        key,
                        value,
                        singleKey: true
                    };
                    return type;
                }
                case 'UserDefinedValue': {
                    const type = {
                        kind: 'user_defined_value'
                    };
                    return type;
                }
                default: {
                    const generics = node.getTypeArguments().map(node => modelType(node));
                    const identifier = node.getTypeName();
                    assert(node, ts_morph_1.Node.isIdentifier(identifier), 'Not an identifier');
                    const declaration = identifier.getDefinitions()[0].getDeclarationNode();
                    if (declaration == null) {
                        const type = {
                            kind: 'instance_of',
                            ...(generics.length > 0 && { generics }),
                            type: {
                                name,
                                namespace: getNameSpace(node)
                            }
                        };
                        return type;
                    }
                    assert(node, ts_morph_1.Node.isClassDeclaration(declaration) ||
                        ts_morph_1.Node.isInterfaceDeclaration(declaration) ||
                        ts_morph_1.Node.isEnumDeclaration(declaration) ||
                        ts_morph_1.Node.isTypeAliasDeclaration(declaration) ||
                        ts_morph_1.Node.isTypeParameterDeclaration(declaration), 'It should be a class, interface, enum, type alias, or type parameter declaration');
                    const type = {
                        kind: 'instance_of',
                        ...(generics.length > 0 && { generics }),
                        type: {
                            name: declaration.getName(),
                            namespace: getNameSpace(node)
                        }
                    };
                    return type;
                }
            }
        }
        default:
            assert(node, false, `Unhandled node kind: ${ts_morph_1.ts.SyntaxKind[node.getKind()]}`);
    }
}
exports.modelType = modelType;
function isApi(declaration) {
    const tags = parseJsDocTags(declaration.getJsDocs());
    return tags.rest_spec_name !== undefined;
}
exports.isApi = isApi;
function modelInherits(node, inherit) {
    const generics = inherit.getTypeNodes()
        .flatMap(node => node.getTypeArguments())
        .map(node => modelType(node));
    return {
        type: {
            name: node.getName(),
            namespace: getNameSpace(node)
        },
        ...(generics.length > 0 && { generics })
    };
}
exports.modelInherits = modelInherits;
function modelImplements(node) {
    const generics = node.getTypeArguments().map(node => modelType(node));
    return {
        type: {
            name: node.getExpression().getText(),
            namespace: getNameSpace(node)
        },
        ...(generics.length > 0 && { generics })
    };
}
exports.modelImplements = modelImplements;
function modelBehaviors(node) {
    const generics = node.getTypeArguments().map(node => modelType(node));
    return {
        type: {
            name: node.getExpression().getText(),
            namespace: getNameSpace(node)
        },
        ...(generics.length > 0 && { generics })
    };
}
exports.modelBehaviors = modelBehaviors;
function modelGenerics(node) {
    return node.getName();
}
exports.modelGenerics = modelGenerics;
function modelEnumDeclaration(declaration) {
    return {
        specLocation: sourceLocation(declaration),
        name: {
            name: declaration.getName(),
            namespace: getNameSpace(declaration)
        },
        kind: 'enum',
        members: declaration.getMembers()
            .map(m => {
            const name = m.getName().replace(/'/g, '');
            const member = {
                name: name
            };
            hoistEnumMemberAnnotations(member, m.getJsDocs());
            return member;
        })
    };
}
exports.modelEnumDeclaration = modelEnumDeclaration;
function modelTypeAlias(declaration) {
    const type = declaration.getTypeNode();
    assert(declaration, type != null, 'Type alias without a referenced type');
    const generics = declaration.getTypeParameters().map(typeParameter => ({
        name: modelGenerics(typeParameter),
        namespace: getNameSpace(typeParameter)
    }));
    const alias = modelType(type);
    const typeAlias = {
        specLocation: sourceLocation(declaration),
        name: {
            name: declaration.getName(),
            namespace: getNameSpace(declaration)
        },
        kind: 'type_alias',
        type: alias,
        ...(generics.length > 0 && { generics })
    };
    if (alias.kind === 'union_of') {
        const variants = parseVariantsTag(declaration.getJsDocs());
        if (variants != null) {
            assert(declaration.getJsDocs(), variants.kind === 'internal_tag' || variants.kind === 'external_tag', 'Type Aliases can only have internal or external variants');
            typeAlias.variants = variants;
        }
    }
    hoistTypeAnnotations(typeAlias, declaration.getJsDocs());
    return typeAlias;
}
exports.modelTypeAlias = modelTypeAlias;
function modelProperty(declaration) {
    const type = declaration.getTypeNode();
    assert(declaration, type != null, 'Type alias without a referenced type');
    const name = declaration.getName().replace(/'/g, '');
    const property = {
        name,
        required: !declaration.hasQuestionToken(),
        type: modelType(type)
    };
    hoistPropertyAnnotations(property, declaration.getJsDocs());
    return property;
}
exports.modelProperty = modelProperty;
function setDeprecated(type, tags, jsDocs) {
    if (tags.deprecated !== undefined) {
        const [version, ...description] = tags.deprecated.split(' ');
        assert(jsDocs, semver_1.default.valid(version), 'Invalid semver value');
        type.deprecation = { version, description: description.join(' ') };
    }
    delete tags.deprecated;
}
function setTags(jsDocs, type, tags, validTags, setter) {
    if (Object.keys(tags).length === 0)
        return;
    setDeprecated(type, tags, jsDocs);
    const badTags = Object.keys(tags).filter(tag => !validTags.includes(tag));
    assert(jsDocs, badTags.length === 0, `'${getName(type)}' has the following unknown annotations: ${badTags.join(', ')}`);
    for (const tag of validTags) {
        if (tag === 'behavior')
            continue;
        if (tags[tag] !== undefined) {
            setter(tags, tag, tags[tag]);
        }
    }
    function getName(type) {
        if (typeof type.name === 'string') {
            return type.name;
        }
        else {
            return type.name.name;
        }
    }
}
function hoistRequestAnnotations(request, jsDocs, mappings, response) {
    const knownRequestAnnotations = [
        'since', 'rest_spec_name', 'stability', 'visibility', 'behavior', 'class_serializer', 'index_privileges', 'cluster_privileges', 'doc_id'
    ];
    assert(jsDocs, jsDocs.length < 2, 'Use a single multiline jsDoc block instead of multiple single line blocks');
    if (jsDocs.length === 1) {
        const description = jsDocs[0].getDescription();
        if (description.length > 0)
            request.description = description.trim();
    }
    const tags = parseJsDocTags(jsDocs);
    const apiName = tags.rest_spec_name;
    assert(jsDocs, apiName !== '' && apiName !== null && apiName !== undefined, `Request ${request.name.name} does not declare the @rest_spec_name to link back to`);
    const endpoint = mappings[apiName];
    assert(jsDocs, endpoint != null, `${apiName} is not represented in the spec as a json file`);
    endpoint.request = request.name;
    endpoint.response = response;
    setTags(jsDocs, request, tags, knownRequestAnnotations, (tags, tag, value) => {
        var _a, _b, _c, _d;
        if (tag.endsWith('_serializer')) {
        }
        else if (tag === 'rest_spec_name') {
        }
        else if (tag === 'visibility') {
            if (endpoint.visibility !== null && endpoint.visibility !== undefined) {
                assert(jsDocs, endpoint.visibility === value, `Request ${request.name.name} visibility on annotation ${value} does not match spec: ${(_a = endpoint.visibility) !== null && _a !== void 0 ? _a : ''}`);
            }
            endpoint.visibility = model.Visibility[value];
        }
        else if (tag === 'stability') {
            assert(jsDocs, endpoint.stability === value, `Request ${request.name.name} stability on annotation ${value} does not match spec: ${(_b = endpoint.stability) !== null && _b !== void 0 ? _b : ''}`);
            endpoint.stability = model.Stability[value];
        }
        else if (tag === 'since') {
            assert(jsDocs, semver_1.default.valid(value), `Request ${request.name.name}'s @since is not valid semver: ${value}`);
            endpoint.since = value;
        }
        else if (tag === 'index_privileges') {
            const privileges = [
                'all', 'auto_configure', 'create', 'create_doc', 'create_index', 'delete', 'delete_index', 'index',
                'maintenance', 'manage', 'manage_follow_index', 'manage_ilm', 'manage_leader_index', 'monitor',
                'read', 'read_cross_cluster', 'view_index_metadata', 'write'
            ];
            const values = value.split(',').map(v => v.trim());
            for (const v of values) {
                assert(jsDocs, privileges.includes(v), `The index privilege '${v}' does not exists.`);
            }
            endpoint.privileges = (_c = endpoint.privileges) !== null && _c !== void 0 ? _c : {};
            endpoint.privileges.index = values;
        }
        else if (tag === 'cluster_privileges') {
            const privileges = [
                'all', 'cancel_task', 'create_snapshot', 'grant_api_key', 'manage', 'manage_api_key', 'manage_ccr',
                'manage_ilm', 'manage_index_templates', 'manage_ingest_pipelines', 'manage_logstash_pipelines',
                'manage_ml', 'manage_oidc', 'manage_own_api_key', 'manage_pipeline', 'manage_rollup', 'manage_saml',
                'manage_security', 'manage_service_account', 'manage_slm', 'manage_token', 'manage_transform',
                'manage_watcher', 'monitor', 'monitor_ml', 'monitor_rollup', 'monitor_snapshot', 'monitor_text_structure',
                'monitor_transform', 'monitor_watcher', 'read_ccr', 'read_ilm', 'read_pipeline', 'read_slm', 'transport_client'
            ];
            const values = value.split(',').map(v => v.trim());
            for (const v of values) {
                assert(jsDocs, privileges.includes(v), `The cluster privilege '${v}' does not exists.`);
            }
            endpoint.privileges = (_d = endpoint.privileges) !== null && _d !== void 0 ? _d : {};
            endpoint.privileges.cluster = values;
        }
        else if (tag === 'doc_id') {
            assert(jsDocs, value.trim() !== '', `Request ${request.name.name}'s @doc_id is cannot be empty`);
            endpoint.docId = value;
        }
        else {
            assert(jsDocs, false, `Unhandled tag: '${tag}' with value: '${value}' on request ${request.name.name}`);
        }
    });
}
exports.hoistRequestAnnotations = hoistRequestAnnotations;
function hoistTypeAnnotations(type, jsDocs) {
    assert(jsDocs, jsDocs.length < 2, 'Use a single multiline jsDoc block instead of multiple single line blocks');
    const validTags = ['class_serializer', 'doc_url', 'behavior', 'variants', 'variant', 'shortcut_property', 'codegen_names'];
    const tags = parseJsDocTags(jsDocs);
    if (jsDocs.length === 1) {
        const description = jsDocs[0].getDescription();
        if (description.length > 0)
            type.description = description.trim();
    }
    setTags(jsDocs, type, tags, validTags, (tags, tag, value) => {
        if (tag === 'stability') {
        }
        else if (tag.endsWith('_serializer')) {
        }
        else if (tag === 'shortcut_property') {
            if (type.kind === 'interface') {
                type.shortcutProperty = value;
            }
            else {
                assert(jsDocs, false, 'Request and Responses cannot have @shortcut_property');
            }
        }
        else if (tag === 'variants') {
        }
        else if (tag === 'variant') {
        }
        else if (tag === 'doc_url') {
            assert(jsDocs, isValidUrl(value), '@doc_url is not a valid url');
            type.docUrl = value;
        }
        else if (tag === 'codegen_names') {
            type.codegenNames = value.split(',').map(v => v.trim());
            assert(jsDocs, type.kind === 'type_alias' && type.type.kind === 'union_of' && type.type.items.length === type.codegenNames.length, '@codegen_names must have the number of items as the union definition');
        }
        else {
            assert(jsDocs, false, `Unhandled tag: '${tag}' with value: '${value}' on type ${type.name.name}`);
        }
    });
}
exports.hoistTypeAnnotations = hoistTypeAnnotations;
function hoistPropertyAnnotations(property, jsDocs) {
    assert(jsDocs, jsDocs.length < 2, 'Use a single multiline jsDoc block instead of multiple single line blocks');
    const validTags = ['stability', 'prop_serializer', 'doc_url', 'aliases', 'codegen_name', 'since', 'server_default', 'variant', 'doc_id'];
    const tags = parseJsDocTags(jsDocs);
    if (jsDocs.length === 1) {
        const description = jsDocs[0].getDescription();
        if (description.length > 0)
            property.description = description.trim();
    }
    setTags(jsDocs, property, tags, validTags, (tags, tag, value) => {
        if (tag.endsWith('_serializer')) {
        }
        else if (tag === 'aliases') {
            property.aliases = value.split(',').map(v => v.trim());
        }
        else if (tag === 'codegen_name') {
            property.codegenName = value;
        }
        else if (tag === 'doc_url') {
            assert(jsDocs, isValidUrl(value), '@doc_url is not a valid url');
            property.docUrl = value;
        }
        else if (tag === 'since') {
            assert(jsDocs, semver_1.default.valid(value), `${property.name}'s @since is not valid semver: ${value}`);
            property.since = value;
        }
        else if (tag === 'doc_id') {
            assert(jsDocs, value.trim() !== '', `Property ${property.name}'s @doc_id is cannot be empty`);
            property.docId = value;
        }
        else if (tag === 'stability') {
            assert(jsDocs, model.Stability[value] != null, `Property ${property.name}'s @stability can be either 'beta' or 'experimental'`);
            property.stability = model.Stability[value];
        }
        else if (tag === 'server_default') {
            assert(jsDocs, property.type.kind === 'instance_of' || property.type.kind === 'union_of' || property.type.kind === 'array_of', `Default values can only be configured for instance_of or union_of types, you are using ${property.type.kind}`);
            assert(jsDocs, !property.required, 'Default values can only be specified on optional properties');
            if (property.type.kind === 'union_of') {
                let valueType = '';
                if (value === 'true' || value === 'false') {
                    valueType = 'boolean';
                }
                else if (!isNaN(Number(value))) {
                    valueType = 'number';
                }
                else {
                    valueType = 'string';
                }
                const unionTypes = property.type.items.map(item => {
                    assert(jsDocs, item.kind === 'instance_of', `Default values in unions can only be configured for instance_of types, you are using ${property.type.kind}`);
                    if (['short', 'byte', 'integer', 'uint', 'long', 'ulong', 'float', 'double', 'Percentage'].includes(item.type.name)) {
                        return 'number';
                    }
                    return item.type.name;
                });
                assert(jsDocs, unionTypes.includes(valueType), `The configured server_default value is not present in the union value: ${unionTypes.join(' | ')}`);
                property.serverDefault = value;
            }
            else if (property.type.kind === 'array_of') {
                try {
                    value = eval(value);
                }
                catch (err) {
                    assert(jsDocs, false, 'The default value is not formatted properly');
                }
                assert(jsDocs, Array.isArray(value), 'The default value should be an array');
                property.serverDefault = value;
            }
            else {
                switch (property.type.type.name) {
                    case 'boolean':
                        assert(jsDocs, value === 'true' || value === 'false', `The default value for ${property.name} should be a boolean`);
                        property.serverDefault = value === 'true';
                        break;
                    case 'number':
                    case 'short':
                    case 'byte':
                    case 'integer':
                    case 'uint':
                    case 'long':
                    case 'ulong':
                    case 'float':
                    case 'double':
                    case 'Percentage':
                        assert(jsDocs, !isNaN(Number(value)), `The default value for ${property.name} should be a number`);
                        property.serverDefault = Number(value);
                        break;
                    default:
                        property.serverDefault = value;
                }
            }
        }
        else if (tag === 'variant') {
            assert(jsDocs, value === 'container_property', `Unknown 'variant' value '${value}' on property ${property.name}`);
            property.containerProperty = true;
        }
        else {
            assert(jsDocs, false, `Unhandled tag: '${tag}' with value: '${value}' on property ${property.name}`);
        }
    });
}
function hoistEnumMemberAnnotations(member, jsDocs) {
    assert(jsDocs, jsDocs.length < 2, 'Use a single multiline jsDoc block instead of multiple single line blocks');
    const validTags = ['obsolete', 'obsolete_description', 'codegen_name', 'since', 'aliases'];
    const tags = parseJsDocTags(jsDocs);
    if (jsDocs.length === 1) {
        const description = jsDocs[0].getDescription();
        if (description.length > 0)
            member.description = description.trim();
    }
    setTags(jsDocs, member, tags, validTags, (tags, tag, value) => {
        if (tag === 'codegen_name') {
            member.codegenName = value;
        }
        else if (tag === 'aliases') {
            member.aliases = value.split(',').map(v => v.trim());
        }
        else if (tag === 'since') {
            assert(jsDocs, semver_1.default.valid(value), `${member.name}'s @since is not valid semver: ${value}`);
            member.since = value;
        }
        else {
            assert(jsDocs, false, `Unhandled tag: '${tag}' with value: '${value}' on enum member ${member.name}`);
        }
    });
}
function isKnownBehavior(node) {
    if (ts_morph_1.Node.isHeritageClause(node)) {
        if (node.getTypeNodes().length !== 1)
            return false;
        for (const knownBehavior of exports.knownBehaviors) {
            if (node.getTypeNodes()[0].getExpression().getText() === knownBehavior) {
                return true;
            }
        }
    }
    else {
        for (const knownBehavior of exports.knownBehaviors) {
            if (node.getExpression().getText() === knownBehavior) {
                return true;
            }
        }
    }
    return false;
}
exports.isKnownBehavior = isKnownBehavior;
function getNameSpace(node) {
    var _a;
    if (ts_morph_1.Node.isTypeReferenceNode(node)) {
        const identifier = node.getTypeName();
        if (ts_morph_1.Node.isIdentifier(identifier)) {
            const name = identifier.compilerNode.escapedText;
            if (name === 'Array')
                return 'internal';
            const definition = identifier.getDefinitions()[0];
            assert(identifier, definition != null, 'Cannot find codegen_name');
            return cleanPath(definition.getSourceFile().getFilePath());
        }
    }
    if (ts_morph_1.Node.isTypeAliasDeclaration(node)) {
        return cleanPath(node.getSourceFile().getFilePath());
    }
    const declaration = (_a = node.getType().getSymbol()) === null || _a === void 0 ? void 0 : _a.getDeclarations()[0];
    if (declaration == null) {
        return 'internal';
    }
    return cleanPath(declaration.getSourceFile().getFilePath());
    function cleanPath(path) {
        path = (0, path_1.dirname)(path)
            .replace(/.*[/\\]specification[/\\]?/, '')
            .replace(/[/\\]/g, '.');
        if (path === '')
            path = 'internal';
        return path;
    }
}
exports.getNameSpace = getNameSpace;
function getAllBehaviors(node) {
    var _a, _b;
    const behaviors = getBehaviors(node.getHeritageClauses());
    const extended = getExtended(node.getHeritageClauses()).flatMap(clause => clause.getTypeNodes())
        .map(t => t.getExpression());
    for (const extend of extended) {
        assert(extend, ts_morph_1.Node.isReferenceFindableNode(extend), 'Should be a reference node');
        const declaration = (_a = extend.getType().getSymbol()) === null || _a === void 0 ? void 0 : _a.getDeclarations()[0];
        assert(extend, declaration != null, `Cannot find declaration for ${extend.getText()}`);
        if (ts_morph_1.Node.isClassDeclaration(declaration) || ts_morph_1.Node.isInterfaceDeclaration(declaration)) {
            if (declaration.getHeritageClauses().length > 0) {
                behaviors.push(...getAllBehaviors(declaration));
            }
        }
        else if (ts_morph_1.Node.isImportSpecifier(declaration)) {
            const sourceFile = declaration.getImportDeclaration().getModuleSpecifierSourceFile();
            assert(declaration, sourceFile != null, 'Cannot find source file');
            const name = declaration.getName();
            for (const declaration of [...sourceFile.getClasses(), ...sourceFile.getInterfaces()]) {
                if (declaration.getName() === name && declaration.getHeritageClauses().length > 0) {
                    behaviors.push(...getAllBehaviors(declaration));
                }
            }
        }
        else {
            assert(declaration, false, `Unhandled extended declaration ${(_b = declaration === null || declaration === void 0 ? void 0 : declaration.getText()) !== null && _b !== void 0 ? _b : ''}`);
        }
    }
    return Array.from(new Set(behaviors));
    function getExtended(clauses) {
        return clauses.filter(clause => clause.getToken() === ts_morph_1.ts.SyntaxKind.ExtendsKeyword);
    }
    function getBehaviors(clauses) {
        return clauses
            .filter(isKnownBehavior)
            .map(clause => clause.getTypeNodes()[0].getExpression().getText());
    }
}
exports.getAllBehaviors = getAllBehaviors;
function parseJsDocTags(jsDoc) {
    const tags = jsDoc.flatMap(d => d.getTags())
        .map(tag => {
        var _a;
        return {
            name: tag.getTagName(),
            value: (_a = tag.getComment()) !== null && _a !== void 0 ? _a : ''
        };
    });
    const mapped = tags.reduce((acc, curr) => ({ ...acc, [curr.name]: curr.value }), {});
    return mapped;
}
exports.parseJsDocTags = parseJsDocTags;
function parseVariantsTag(jsDoc) {
    const tags = parseJsDocTags(jsDoc);
    if (tags.variants == null) {
        return undefined;
    }
    const [type, value] = tags.variants.split(' ');
    if (type === 'external') {
        return { kind: 'external_tag' };
    }
    if (type === 'container') {
        return { kind: 'container' };
    }
    assert(jsDoc, type === 'internal', `Bad variant type: ${type}`);
    assert(jsDoc, typeof value === 'string', 'Internal variant requires a tag definition');
    const [tag, property] = value.split('=');
    assert(jsDoc, tag === 'tag', 'The tag name should be "tag"');
    assert(jsDoc, typeof property === 'string', 'The tag property is not defined');
    return {
        kind: 'internal_tag',
        tag: property.replace(/'/g, '')
    };
}
exports.parseVariantsTag = parseVariantsTag;
function parseVariantNameTag(jsDoc) {
    const tags = parseJsDocTags(jsDoc);
    if (tags.variant == null) {
        return undefined;
    }
    const [key, name] = tags.variant.split('=');
    assert(jsDoc, key === 'name', 'The @variant key should be "name"');
    assert(jsDoc, typeof name === 'string', 'The @variant key should be "name"');
    return name.replace(/'/g, '');
}
exports.parseVariantNameTag = parseVariantNameTag;
function isDefinedButNeverUsed(declaration) {
    if (ts_morph_1.Node.isClassDeclaration(declaration) || ts_morph_1.Node.isInterfaceDeclaration(declaration)) {
        const name = declaration.getName();
        assert(declaration, name != null, 'Anonymous classes should not exists');
        if (name.endsWith('Request') || name.endsWith('Response')) {
            return false;
        }
    }
    let count = 0;
    for (const referencedSymbol of declaration.findReferences()) {
        count += referencedSymbol.getReferences().length;
    }
    return count === 1;
}
exports.isDefinedButNeverUsed = isDefinedButNeverUsed;
function assert(node, condition, message) {
    if (!condition) {
        let file = '';
        const code = [];
        if (node != null) {
            node = Array.isArray(node) ? node : [node];
            const sourceFile = node[0].getSourceFile();
            const lines = sourceFile.getEndLineNumber();
            const firstPos = sourceFile.getLineAndColumnAtPos(node[0].getPos());
            file = `${node[0].getSourceFile().getFilePath()}:${firstPos.line}:${firstPos.column}`;
            for (const n of node) {
                const text = sourceFile.getFullText().split(os_1.EOL).map((line, index) => `${index + 1}  ${line}`);
                const start = n.getStartLineNumber();
                const end = n.getEndLineNumber();
                for (let i = start; i <= end; i++) {
                    text[i - 1] = chalk_1.default.red(text[i - 1]);
                }
                const startShow = start - 3 > 0 ? (start - 3) : 0;
                const endShow = end + 2 <= lines ? (end + 2) : lines;
                code.push(text.slice(startShow, endShow).join(os_1.EOL));
            }
        }
        console.log('Error:', message);
        if (file.length > 0)
            console.log('At:', file);
        if (code.length > 0)
            console.log(`\`\`\`\n${code.join('\n```\n')}\n\`\`\``);
        process.exit(1);
    }
}
exports.assert = assert;
function verifyUniqueness(project) {
    var _a, _b, _c;
    const types = new Map();
    const common = [];
    for (const sourceFile of project.getSourceFiles()) {
        const path = (0, path_1.dirname)(sourceFile.getFilePath().replace(/.*[/\\]specification[/\\]?/, ''));
        if (!path.startsWith('_types'))
            continue;
        for (const declaration of sourceFile.getClasses()) {
            const name = declaration.getName();
            assert(declaration, name != null, 'Anonymous classes cannot exists');
            assert(declaration, !name.endsWith('Request') && !name.endsWith('Response'), 'A type cannot end with "Request" or "Response"');
            assert(declaration, !common.includes(name), `${name} is already defined in the global types`);
            common.push(name);
        }
        for (const declaration of sourceFile.getInterfaces()) {
            assert(declaration, !declaration.getName().endsWith('Request') && !declaration.getName().endsWith('Response'), 'A type cannot end with "Request" or "Response"');
            assert(declaration, !common.includes(declaration.getName()), `${declaration.getName()} is already defined in the global types`);
            common.push(declaration.getName());
        }
        for (const declaration of sourceFile.getEnums()) {
            assert(declaration, !declaration.getName().endsWith('Request') && !declaration.getName().endsWith('Response'), 'A type cannot end with "Request" or "Response"');
            assert(declaration, !common.includes(declaration.getName()), `${declaration.getName()} is already defined in the global types`);
            common.push(declaration.getName());
        }
        for (const declaration of sourceFile.getTypeAliases()) {
            assert(declaration, !declaration.getName().endsWith('Request') && !declaration.getName().endsWith('Response'), 'A type cannot end with "Request" or "Response"');
            assert(declaration, !common.includes(declaration.getName()), `${declaration.getName()} is already defined in the global types`);
            common.push(declaration.getName());
        }
    }
    for (const sourceFile of project.getSourceFiles()) {
        const path = (0, path_1.dirname)(sourceFile.getFilePath().replace(/.*[/\\]specification[/\\]?/, ''));
        if (path.startsWith('_types'))
            continue;
        if (!path.includes('_types'))
            continue;
        const namespace = path.startsWith('_global') ? `_global${path_1.sep}${path.split(path_1.sep)[1]}` : path.split(path_1.sep)[0];
        const names = (_a = types.get(namespace)) !== null && _a !== void 0 ? _a : [];
        for (const declaration of sourceFile.getClasses()) {
            const name = declaration.getName();
            assert(declaration, name != null, 'Anonymous classes cannot exists');
            assert(declaration, !name.endsWith('Request') && !name.endsWith('Response'), 'A type cannot end with "Request" or "Response"');
            assert(declaration, !common.includes(name), `${name} is already defined in ${namespace} is already defined in the global types`);
            assert(declaration, !names.includes(name), `${name} is already defined in ${namespace} local types`);
            names.push(name);
        }
        for (const declaration of sourceFile.getInterfaces()) {
            assert(declaration, !declaration.getName().endsWith('Request') && !declaration.getName().endsWith('Response'), 'A type cannot end with "Request" or "Response"');
            assert(declaration, !common.includes(declaration.getName()), `${declaration.getName()} is already defined in the global types`);
            assert(declaration, !names.includes(declaration.getName()), `${declaration.getName()} is already defined in ${namespace} local types`);
            names.push(declaration.getName());
        }
        for (const declaration of sourceFile.getEnums()) {
            assert(declaration, !declaration.getName().endsWith('Request') && !declaration.getName().endsWith('Response'), 'A type cannot end with "Request" or "Response"');
            assert(declaration, !common.includes(declaration.getName()), `${declaration.getName()} is already defined in the global types`);
            assert(declaration, !names.includes(declaration.getName()), `${declaration.getName()} is already defined in ${namespace} local types`);
            names.push(declaration.getName());
        }
        for (const declaration of sourceFile.getTypeAliases()) {
            assert(declaration, !declaration.getName().endsWith('Request') && !declaration.getName().endsWith('Response'), 'A type cannot end with "Request" or "Response"');
            assert(declaration, !common.includes(declaration.getName()), `${declaration.getName()} is already defined in the global types`);
            assert(declaration, !names.includes(declaration.getName()), `${declaration.getName()} is already defined in ${namespace} local types`);
            names.push(declaration.getName());
        }
        types.set(namespace, names);
    }
    for (const sourceFile of project.getSourceFiles()) {
        const path = (0, path_1.dirname)(sourceFile.getFilePath().replace(/.*[/\\]specification[/\\]?/, ''));
        if (path.includes('_types'))
            continue;
        const namespace = path.startsWith('_global') ? `_global${path_1.sep}${path.split(path_1.sep)[1]}` : path.split(path_1.sep)[0];
        const names = (_b = types.get(path)) !== null && _b !== void 0 ? _b : [];
        const localTypes = (_c = types.get(namespace)) !== null && _c !== void 0 ? _c : [];
        for (const declaration of sourceFile.getClasses()) {
            const name = declaration.getName();
            assert(declaration, name != null, 'Anonymous classes cannot exists');
            if (name !== 'Request' && name !== 'Response') {
                assert(declaration, !name.endsWith('Request') && !name.endsWith('Response'), 'A type cannot end with "Request" or "Response"');
            }
            assert(declaration, !names.includes(name), `${name} is already defined`);
            assert(declaration, !common.includes(name), `${name} is already defined in the global types`);
            assert(declaration, !localTypes.includes(name), `${name} is already defined in ${namespace} local types`);
            names.push(name);
        }
        for (const declaration of sourceFile.getInterfaces()) {
            if (declaration.getName() !== 'Request' && declaration.getName() !== 'Response') {
                assert(declaration, !declaration.getName().endsWith('Request') && !declaration.getName().endsWith('Response'), 'A type cannot end with "Request" or "Response"');
            }
            assert(declaration, !names.includes(declaration.getName()), `${declaration.getName()} is already defined`);
            assert(declaration, !common.includes(declaration.getName()), `${declaration.getName()} is already defined in the global types`);
            assert(declaration, !localTypes.includes(declaration.getName()), `${declaration.getName()} is already defined in ${namespace} local types`);
            names.push(declaration.getName());
        }
        for (const declaration of sourceFile.getEnums()) {
            if (declaration.getName() !== 'Request' && declaration.getName() !== 'Response') {
                assert(declaration, !declaration.getName().endsWith('Request') && !declaration.getName().endsWith('Response'), 'A type cannot end with "Request" or "Response"');
            }
            assert(declaration, !names.includes(declaration.getName()), `${declaration.getName()} is already defined`);
            assert(declaration, !common.includes(declaration.getName()), `${declaration.getName()} is already defined in the global types`);
            assert(declaration, !localTypes.includes(declaration.getName()), `${declaration.getName()} is already defined in ${namespace} local types`);
            names.push(declaration.getName());
        }
        for (const declaration of sourceFile.getTypeAliases()) {
            if (declaration.getName() !== 'Request' && declaration.getName() !== 'Response') {
                assert(declaration, !declaration.getName().endsWith('Request') && !declaration.getName().endsWith('Response'), 'A type cannot end with "Request" or "Response"');
            }
            assert(declaration, !names.includes(declaration.getName()), `${declaration.getName()} is already defined`);
            assert(declaration, !common.includes(declaration.getName()), `${declaration.getName()} is already defined in the global types`);
            assert(declaration, !localTypes.includes(declaration.getName()), `${declaration.getName()} is already defined in ${namespace} local types`);
            names.push(declaration.getName());
        }
        types.set(path, names);
    }
}
exports.verifyUniqueness = verifyUniqueness;
function isValidUrl(str) {
    try {
        new URL(str);
        return true;
    }
    catch (err) {
        return false;
    }
}
exports.isValidUrl = isValidUrl;
function deepEqual(a, b) {
    try {
        (0, assert_1.deepStrictEqual)(a, b);
        return true;
    }
    catch (err) {
        return false;
    }
}
exports.deepEqual = deepEqual;
const basePath = (0, path_1.join)(__dirname, '..', '..', '..', 'specification') + '/';
function sourceLocation(node) {
    const sourceFile = node.getSourceFile();
    return {
        path: sourceFile.getFilePath().replace(basePath, ''),
        startLine: node.getStartLineNumber(true),
        endLine: node.getEndLineNumber()
    };
}
exports.sourceLocation = sourceLocation;
