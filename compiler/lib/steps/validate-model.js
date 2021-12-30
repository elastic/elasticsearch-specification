"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const allowedSuperclasses = new Set([
    '_types:ErrorCause'
]);
var TypeDefKind;
(function (TypeDefKind) {
    TypeDefKind[TypeDefKind["type"] = 0] = "type";
    TypeDefKind[TypeDefKind["behavior"] = 1] = "behavior";
})(TypeDefKind || (TypeDefKind = {}));
var JsonEvent;
(function (JsonEvent) {
    JsonEvent["string"] = "string";
    JsonEvent["number"] = "number";
    JsonEvent["boolean"] = "boolean";
    JsonEvent["null"] = "null";
    JsonEvent["object"] = "object";
    JsonEvent["array"] = "array";
})(JsonEvent || (JsonEvent = {}));
async function validateModel(apiModel, restSpec, errors) {
    var _a, _b, _c;
    const failHard = process.env.FAIL_HARD != null;
    const initialTypeCount = apiModel.types.length;
    function fqn(name) {
        return `${name.namespace}:${name.name}`;
    }
    function sameTypeName(n1, n2) {
        return n1.namespace === n2.namespace && n1.name === n2.name;
    }
    function getTypeDef(name) {
        return typeDefByName.get(fqn(name));
    }
    let currentEndpoint;
    let currentPart = 'request';
    function setRootContext(endpoint, what) {
        currentEndpoint = endpoint;
        currentPart = what;
    }
    let context = [];
    let errorCount = 0;
    function modelError(msg) {
        const fullMsg = (context.length === 0) ? msg : context.join(' / ') + ' - ' + msg;
        if (currentEndpoint != null) {
            errors.addEndpointError(currentEndpoint, currentPart, fullMsg);
        }
        else {
            errors.addGeneralError(fullMsg);
        }
        errorCount++;
    }
    const typeDefByName = new Map();
    for (const type of apiModel.types) {
        typeDefByName.set(fqn(type.name), type);
    }
    const behaviorByName = new Map();
    const behaviorByShortName = new Map();
    for (const typeDef of apiModel.types) {
        context.push(`Type definition ${fqn(typeDef.name)}`);
        if (typeDef.kind === 'request' || typeDef.kind === 'interface') {
            for (const bhv of (_a = typeDef.behaviors) !== null && _a !== void 0 ? _a : []) {
                const bhvDef = getTypeDef(bhv.type);
                if (bhvDef == null) {
                    modelError(`No type definition for '${fqn(bhv.type)}'`);
                }
                else {
                    behaviorByName.set(fqn(bhv.type), bhvDef);
                    behaviorByShortName.set(bhv.type.name, bhv.type);
                }
            }
        }
        context.pop();
    }
    apiModel.types = apiModel.types.filter(typeDef => !behaviorByName.has(fqn(typeDef.name)));
    const parentTypes = new Set();
    for (const type of apiModel.types) {
        if (type.kind === 'request' || type.kind === 'interface') {
            for (const parent of ((_b = type.implements) !== null && _b !== void 0 ? _b : []).concat((_c = type.inherits) !== null && _c !== void 0 ? _c : [])) {
                parentTypes.add(fqn(parent.type));
            }
        }
    }
    const typesSeen = new Set();
    for (const name of [
        'string', 'boolean', 'number', 'null'
    ]) {
        const typeName = {
            namespace: 'internal',
            name: name
        };
        typeDefByName.set(fqn(typeName), {
            kind: 'interface',
            name: typeName,
            properties: [],
            specLocation: { path: '', startLine: -1, endLine: -1 }
        });
    }
    validateTypeRef({ namespace: '_types', name: 'ErrorResponseBase' }, undefined, new Set());
    function readyForValidation(ep) {
        return ep.request != null && ep.response != null;
    }
    apiModel.endpoints.filter(ep => readyForValidation(ep)).forEach(validateEndpoint);
    apiModel.endpoints.filter(ep => !readyForValidation(ep)).forEach(validateEndpoint);
    apiModel.types = apiModel.types.filter(type => typesSeen.has(fqn(type.name)));
    for (const [bhn, bh] of behaviorByName) {
        if (typesSeen.has(bhn)) {
            apiModel.types.push(bh);
        }
    }
    const danglingTypesCount = initialTypeCount - apiModel.types.length;
    console.info(`Model validation: ${typesSeen.size} types visited, ${danglingTypesCount} dangling types.`);
    if (errorCount > 0 && failHard) {
        throw new Error('Model is inconsistent. Check logs for details');
    }
    return apiModel;
    function validateEndpoint(endpoint) {
        setRootContext(endpoint.name, 'request');
        if (endpoint.request == null) {
            if (endpoint.response == null) {
                modelError('Missing request & response');
                return;
            }
            else {
                modelError('Missing request');
            }
        }
        else {
            const reqType = getTypeDef(endpoint.request);
            if (reqType == null) {
                modelError(`Type ${fqn(endpoint.request)} not found`);
            }
            else if (reqType.kind !== 'request') {
                modelError(`Type ${fqn(endpoint.request)} is not a request definition`);
            }
            else {
                validateTypeDef(reqType);
                validateIsLeafType(endpoint.request);
                const reqProperties = new Set(reqType.path.map(p => p.name));
                const urlProperties = new Set();
                for (const url of endpoint.urls) {
                    const re = /{([^}]+)}/g;
                    let m;
                    while ((m = re.exec(url.path)) != null) {
                        urlProperties.add(m[1]);
                    }
                }
                for (const urlProp of urlProperties) {
                    if (!reqProperties.has(urlProp)) {
                        modelError(`Url path property '${urlProp}' is missing in request definition`);
                    }
                }
                for (const reqProp of reqProperties) {
                    if (!urlProperties.has(reqProp)) {
                        modelError(`Request path property '${reqProp}' doesn't exist in endpoint URL templates`);
                    }
                }
            }
        }
        setRootContext(endpoint.name, 'response');
        if (endpoint.response == null) {
            modelError('Missing response');
        }
        else {
            const respType = getTypeDef(endpoint.response);
            if (respType == null) {
                modelError(`Type ${fqn(endpoint.response)} not found`);
            }
            else {
                validateTypeDef(respType);
                validateIsLeafType(endpoint.response);
            }
        }
    }
    function validateTypeRef(name, generics, openGenerics, kind = TypeDefKind.type) {
        var _a, _b, _c;
        const fqName = fqn(name);
        if (openGenerics.has(fqName)) {
            return;
        }
        const typeDef = kind === TypeDefKind.behavior ? behaviorByName.get(fqName) : getTypeDef(name);
        if (typeDef == null) {
            modelError(`No type definition for '${fqName}'`);
            return;
        }
        if (typeDef.kind === 'request') {
            modelError(`'${fqName}' is a request and must only be used in endpoints`);
        }
        validateTypeDef(typeDef);
        const genericsCount = (_a = generics === null || generics === void 0 ? void 0 : generics.length) !== null && _a !== void 0 ? _a : 0;
        if (typeDef.kind !== 'enum') {
            const typeGenericsCount = (_c = (_b = typeDef.generics) === null || _b === void 0 ? void 0 : _b.length) !== null && _c !== void 0 ? _c : 0;
            if (genericsCount !== typeGenericsCount) {
                modelError(`Expected ${typeGenericsCount} generic parameters but got ${genericsCount}`);
            }
        }
        else {
            if (genericsCount !== 0) {
                modelError(`Type kind '${typeDef.kind}' doesn't accept generic parameters`);
            }
        }
        context.push('Generics');
        for (const v of generics !== null && generics !== void 0 ? generics : []) {
            validateValueOf(v, openGenerics);
        }
        context.pop();
    }
    function validateTypeDef(typeDef) {
        if (typesSeen.has(fqn(typeDef.name))) {
            return;
        }
        typesSeen.add(fqn(typeDef.name));
        const oldContext = context;
        context = [];
        context.push(`${typeDef.kind} definition ${typeDef.name.namespace}:${typeDef.name.name}`);
        if (typeDef.docUrl != null) {
            try {
                new URL(typeDef.docUrl);
            }
            catch (error) {
                modelError('Description URL is malformed');
            }
        }
        switch (typeDef.kind) {
            case 'request':
                validateRequest(typeDef);
                break;
            case 'response':
                validateResponse(typeDef);
                break;
            case 'interface':
                validateInterface(typeDef);
                break;
            case 'enum':
                validateEnum(typeDef);
                break;
            case 'type_alias':
                validateTypeAlias(typeDef);
                break;
            default:
                throw new Error(`Unknown kind: ${typeDef.kind}`);
        }
        context = oldContext;
    }
    function validateRequest(typeDef) {
        const openGenerics = openGenericSet(typeDef);
        validateInherits(typeDef.inherits, openGenerics);
        validateImplements(typeDef.implements, openGenerics);
        validateBehaviors(typeDef, openGenerics);
        const inheritedProps = inheritedProperties(typeDef);
        context.push('path');
        validateProperties(typeDef.path, openGenerics, inheritedProps);
        context.pop();
        context.push('query');
        validateProperties(typeDef.query, openGenerics, inheritedProps);
        context.pop();
        context.push('body');
        if (typeDef.inherits != null && typeDef.body.kind !== 'properties') {
            if (fqn(typeDef.inherits.type) !== '_types:RequestBase') {
                modelError('A request with inherited properties must have a PropertyBody');
            }
        }
        switch (typeDef.body.kind) {
            case 'properties':
                validateProperties(typeDef.body.properties, openGenerics, inheritedProps);
                break;
            case 'value':
                validateValueOf(typeDef.body.value, openGenerics);
                break;
            case 'no_body':
                break;
            default:
                throw new Error(`Unknown kind: ${typeDef.body.kind}`);
        }
        context.pop();
    }
    function validateResponse(typeDef) {
        const openGenerics = openGenericSet(typeDef);
        validateInherits(typeDef.inherits, openGenerics);
        validateImplements(typeDef.implements, openGenerics);
        validateBehaviors(typeDef, openGenerics);
        context.push('body');
        if (typeDef.inherits != null && typeDef.body.kind !== 'properties') {
            if (fqn(typeDef.inherits.type) !== '_types:RequestBase') {
                modelError('A response with inherited properties must have a PropertyBody');
            }
        }
        switch (typeDef.body.kind) {
            case 'properties':
                validateProperties(typeDef.body.properties, openGenerics, inheritedProperties(typeDef));
                break;
            case 'value':
                validateValueOf(typeDef.body.value, openGenerics);
                break;
            case 'no_body':
                break;
            default:
                throw new Error(`Unknown kind: ${typeDef.body.kind}`);
        }
        context.pop();
    }
    function inheritedProperties(typeDef, accum) {
        var _a, _b;
        const result = accum !== null && accum !== void 0 ? accum : new Set();
        function addProperties(props) {
            props.forEach(prop => { var _a; return result.add(((_a = prop.codegenName) !== null && _a !== void 0 ? _a : prop.name).toLowerCase()); });
        }
        function addInherits(inherits) {
            if (inherits == null) {
                return;
            }
            const typeDef = getTypeDef(inherits.type);
            if (typeDef == null) {
                modelError(`No type definition for parent '${fqn(inherits.type)}'`);
                return;
            }
            switch (typeDef === null || typeDef === void 0 ? void 0 : typeDef.kind) {
                case 'request':
                    inheritedProperties(typeDef, result);
                    addProperties(typeDef.path);
                    addProperties(typeDef.query);
                    if (typeDef.body.kind === 'properties') {
                        addProperties(typeDef.body.properties);
                    }
                    break;
                case 'response':
                    inheritedProperties(typeDef, result);
                    if (typeDef.body.kind === 'properties') {
                        addProperties(typeDef.body.properties);
                    }
                    break;
                case 'interface':
                    inheritedProperties(typeDef, result);
                    addProperties(typeDef.properties);
                    break;
            }
        }
        if (typeDef.inherits != null) {
            addInherits(typeDef.inherits);
        }
        (_a = typeDef.implements) === null || _a === void 0 ? void 0 : _a.forEach(addInherits);
        (_b = typeDef.behaviors) === null || _b === void 0 ? void 0 : _b.forEach(addInherits);
        return result;
    }
    function validateInterface(typeDef) {
        var _a;
        const openGenerics = openGenericSet(typeDef);
        validateImplements(typeDef.implements, openGenerics);
        validateInherits(typeDef.inherits, openGenerics);
        validateBehaviors(typeDef, openGenerics);
        validateProperties(typeDef.properties, openGenerics, inheritedProperties(typeDef));
        if (((_a = typeDef.variants) === null || _a === void 0 ? void 0 : _a.kind) === 'container') {
            const variants = typeDef.properties.filter(prop => { var _a; return !((_a = prop.containerProperty) !== null && _a !== void 0 ? _a : false); });
            if (variants.length === 1) {
                if (!variants[0].required) {
                    modelError(`Property ${variants[0].name} is a single-variant and must be required`);
                }
            }
            else {
                for (const v of variants) {
                    if (v.required) {
                        modelError(`Variant ${variants[0].name} must be optional`);
                    }
                }
            }
        }
    }
    function validateEnum(typeDef) {
        var _a;
        const allIdentifiers = new Set();
        const allNames = new Set();
        for (const item of typeDef.members) {
            const codegenName = ((_a = item.codegenName) !== null && _a !== void 0 ? _a : item.name).toLowerCase();
            if (allIdentifiers.has(codegenName)) {
                modelError(`Duplicate enum member codegen_name '${item.name}'`);
            }
            allIdentifiers.add(codegenName);
            if (allNames.has(item.name)) {
                modelError(`Duplicate enum member name '${item.name}'`);
            }
            allNames.add(item.name);
        }
    }
    function validateTypeAlias(typeDef) {
        var _a;
        const openGenerics = new Set((_a = typeDef.generics) === null || _a === void 0 ? void 0 : _a.map(t => t.name));
        if (typeDef.variants != null) {
            if (typeDef.generics != null && typeDef.generics.length !== 0) {
                modelError('A tagged union should not have generic parameters');
            }
            if (typeDef.type.kind !== 'union_of') {
                modelError('The "variants" tag only applies to unions');
            }
            else {
                validateTaggedUnion(typeDef.type, typeDef.variants);
            }
        }
        else {
            validateValueOf(typeDef.type, openGenerics);
        }
    }
    function validateTaggedUnion(valueOf, variants) {
        if (variants.kind === 'external_tag') {
            const items = flattenUnionMembers(valueOf);
            for (const item of items) {
                if (item.kind !== 'instance_of') {
                    modelError('Items of externally tagged unions must be types with a "variant_tag" annotation');
                }
                else {
                    validateTypeRef(item.type, undefined, new Set());
                    const type = getTypeDef(item.type);
                    if (type == null) {
                        modelError(`Type ${fqn(item.type)} not found`);
                    }
                    else {
                        if (type.variantName == null) {
                            modelError(`Type ${fqn(item.type)} is part of a tagged union and should have a "@variant name"`);
                        }
                        else {
                        }
                    }
                }
            }
        }
        else if (variants.kind === 'internal_tag') {
            const tagName = variants.tag;
            const items = flattenUnionMembers(valueOf);
            for (const item of items) {
                if (item.kind !== 'instance_of') {
                    modelError('Items of internally tagged unions must be type references');
                }
                else {
                    validateTypeRef(item.type, undefined, new Set());
                    const type = getTypeDef(item.type);
                    if (type == null) {
                        modelError(`Type ${fqn(item.type)} not found`);
                    }
                    else if (type.kind === 'interface') {
                        const tagProperty = type.properties.find(prop => prop.name === tagName);
                        if (tagProperty == null) {
                            modelError(`Type ${fqn(item.type)} should have a "${tagName}" variant tag property`);
                        }
                    }
                }
            }
            validateValueOf(valueOf, new Set());
        }
    }
    function openGenericSet(typeDef) {
        var _a;
        return new Set(((_a = typeDef.generics) !== null && _a !== void 0 ? _a : []).map(name => fqn(name)));
    }
    function validateInherits(parent, openGenerics) {
        if (parent == null)
            return;
        context.push('Inherits');
        validateTypeRef(parent.type, parent.generics, openGenerics);
        context.pop();
    }
    function validateImplements(parents, openGenerics) {
        if (parents == null || parents.length === 0)
            return;
        context.push('Implements');
        for (const parent of parents) {
            validateTypeRef(parent.type, parent.generics, openGenerics);
        }
        context.pop();
    }
    function validateBehaviors(typeDef, openGenerics) {
        if (typeDef.behaviors != null && typeDef.behaviors.length > 0) {
            context.push('Behaviors');
            for (const parent of typeDef.behaviors) {
                validateTypeRef(parent.type, parent.generics, openGenerics);
            }
            context.pop();
        }
        if (typeDef.attachedBehaviors != null) {
            for (const abh of typeDef.attachedBehaviors) {
                const bhName = behaviorByShortName.get(abh);
                if (bhName == null) {
                    modelError(`No type definition for behavior '${abh}'`);
                    continue;
                }
                if (!behaviorExists(typeDef, bhName)) {
                    modelError(`Attached behavior '${abh}' not found in type or ancestors`);
                }
            }
        }
    }
    function behaviorExists(type, behavior) {
        var _a, _b, _c;
        for (const b of ((_a = type.behaviors) !== null && _a !== void 0 ? _a : [])) {
            if (sameTypeName(b.type, behavior)) {
                return true;
            }
        }
        const parents = ((_b = type.implements) !== null && _b !== void 0 ? _b : []).concat((_c = type.inherits) !== null && _c !== void 0 ? _c : []);
        for (const parent of parents) {
            const parentDef = getTypeDef(parent.type);
            if (parentDef == null) {
                modelError(`No type definition for parent '${fqn(parent.type)}'`);
                return false;
            }
            if (parentDef.kind === 'request' || parentDef.kind === 'interface') {
                if (behaviorExists(parentDef, behavior)) {
                    return true;
                }
            }
        }
        return false;
    }
    function validateProperties(props, openGenerics, inheritedProperties) {
        var _a, _b;
        const allIdentifiers = new Set();
        const allNames = new Set();
        for (const prop of props) {
            const codegenName = ((_a = prop.codegenName) !== null && _a !== void 0 ? _a : prop.name).toLowerCase();
            if (allIdentifiers.has(codegenName)) {
                modelError(`Duplicate property codegen_name: '${prop.name}'`);
            }
            allIdentifiers.add(codegenName);
            if (inheritedProperties.has(codegenName)) {
                modelError(`Property '${prop.name}' is already defined in an ancestor class`);
            }
            const names = [prop.name].concat((_b = prop.aliases) !== null && _b !== void 0 ? _b : []);
            for (const name of names) {
                if (allNames.has(name)) {
                    modelError(`Duplicate property name or alias: '${name}'`);
                }
                allNames.add(name);
            }
            context.push(`Property '${prop.name}'`);
            validateValueOf(prop.type, openGenerics);
            validateValueOfJsonEvents(prop.type);
            context.pop();
        }
    }
    function validateIsLeafType(type) {
        if (parentTypes.has(fqn(type))) {
            if (type.namespace === 'aggregations')
                return;
            const fqName = fqn(type);
            switch (fqName) {
                case 'internal:ErrorCause':
                case 'x_pack.enrich:EnrichPolicy':
                case 'x_pack.info.x_pack_usage:XPackUsage':
                case 'x_pack.info.x_pack_usage:SecurityFeatureToggle':
                case 'x_pack.watcher.watcher_stats:WatchRecordQueuedStats':
                case 'x_pack.security.user.get_user:XPackUser':
                case 'cluster.nodes_stats:MemoryStats':
                case 'search.search:SearchResponse':
                    return;
                case 'mapping.types:PropertyBase':
                case 'analysis.token_filters:TokenFilterBase':
                    return;
                case 'x_pack.watcher.input:HttpInputRequestDefinition':
                    return;
            }
            if (!allowedSuperclasses.has(fqName)) {
                modelError(`Non-leaf type cannot be used here: '${fqName}'`);
            }
        }
    }
    function validateValueOf(valueOf, openGenerics) {
        context.push(valueOf.kind);
        switch (valueOf.kind) {
            case 'instance_of':
                validateTypeRef(valueOf.type, valueOf.generics, openGenerics);
                validateIsLeafType(valueOf.type);
                break;
            case 'array_of':
                validateValueOf(valueOf.value, openGenerics);
                break;
            case 'union_of':
                for (const item of valueOf.items) {
                    validateValueOf(item, openGenerics);
                }
                break;
            case 'dictionary_of':
                validateValueOf(valueOf.key, openGenerics);
                validateValueOf(valueOf.value, openGenerics);
                break;
            case 'user_defined_value':
                break;
            case 'literal_value':
                break;
            default:
                throw new Error(`Unknown kind: ${valueOf.kind}`);
        }
        context.pop();
    }
    function validateValueOfJsonEvents(valueOf) {
    }
    function validateEvent(events, event) {
        if (events.has(event)) {
            modelError('Ambiguous JSON type: ' + event);
        }
        events.add(event);
    }
    function typeDefJsonEvents(events, typeDef) {
        if (typeDef.name.namespace === 'internal') {
            switch (typeDef.name.name) {
                case 'string':
                    validateEvent(events, JsonEvent.string);
                    return;
                case 'boolean':
                    validateEvent(events, JsonEvent.boolean);
                    return;
                case 'number':
                    validateEvent(events, JsonEvent.number);
                    return;
                case 'object':
                    validateEvent(events, JsonEvent.object);
                    return;
                case 'null':
                    validateEvent(events, JsonEvent.null);
                    return;
                case 'Array':
                    validateEvent(events, JsonEvent.array);
                    return;
            }
        }
        switch (typeDef.kind) {
            case 'request':
            case 'interface':
                validateEvent(events, JsonEvent.object);
                break;
            case 'enum':
                validateEvent(events, JsonEvent.string);
                break;
            case 'type_alias':
                if (typeDef.variants == null) {
                    valueOfJsonEvents(events, typeDef.type);
                }
                else {
                    (0, assert_1.default)(typeDef.type.kind === 'union_of', 'Variants are only allowed on union_of type aliases');
                    for (const item of flattenUnionMembers(typeDef.type)) {
                        validateValueOfJsonEvents(item);
                    }
                    if (typeDef.variants.kind === 'internal_tag') {
                        validateEvent(events, JsonEvent.object);
                    }
                }
                break;
        }
    }
    function flattenUnionMembers(union) {
        const allItems = new Array();
        function collectItems(items) {
            for (const item of items) {
                if (item.kind !== 'instance_of') {
                    validateValueOf(item, new Set());
                    allItems.push(item);
                }
                else {
                    const itemType = getTypeDef(item.type);
                    if ((itemType === null || itemType === void 0 ? void 0 : itemType.kind) === 'type_alias' && itemType.type.kind === 'union_of') {
                        typesSeen.add(fqn(item.type));
                        collectItems(itemType.type.items);
                    }
                    else {
                        validateValueOf(item, new Set());
                        allItems.push(item);
                    }
                }
            }
        }
        collectItems(union.items);
        return allItems;
    }
    function typeRefJsonEvents(events, name) {
        const type = getTypeDef(name);
        if (type != null) {
            typeDefJsonEvents(events, type);
        }
    }
    function valueOfJsonEvents(events, valueOf) {
        context.push(valueOf.kind);
        switch (valueOf.kind) {
            case 'instance_of':
                typeRefJsonEvents(events, valueOf.type);
                break;
            case 'user_defined_value':
                validateEvent(events, JsonEvent.object);
                break;
            case 'array_of':
                validateEvent(events, JsonEvent.array);
                validateValueOfJsonEvents(valueOf.value);
                break;
            case 'dictionary_of':
                validateEvent(events, JsonEvent.object);
                context.push('key');
                validateValueOfJsonEvents(valueOf.key);
                context.pop();
                context.push('value');
                validateValueOfJsonEvents(valueOf.value);
                context.pop();
                break;
            case 'union_of':
                for (const item of valueOf.items) {
                    valueOfJsonEvents(events, item);
                }
                break;
        }
        context.pop();
    }
}
exports.default = validateModel;
