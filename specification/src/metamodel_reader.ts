import Domain from "./domain";

import {Specification} from "./api-specification";
import {
  Endpoint,
  EnumMember,
  Inherits,
  Implements,
  Model,
  PropertiesBody,
  Property,
  Request,
  Stability,
  TypeDefinition,
  TypeName,
  UrlTemplate,
  ValueBody,
  ValueOf
} from "./metamodel";

export function loadModel(spec: Specification): Model {
  const model: Model = {
    types: [],
    endpoints: []
  };

  const allTypeDefinitions = new Map<string, TypeDefinition>();
  const allTypeNames = new Map<string, TypeName>();
  const autoFixedGenerics = new Set<string>();

  allTypeNames.set("boolean", { namespace: "internal", name:"boolean" });
  allTypeNames.set("string", { namespace: "internal", name:"string" });
  allTypeNames.set("number", { namespace: "internal", name:"number" });
  allTypeNames.set("null", { namespace: "internal", name:"null" });
  allTypeNames.set("Array", { namespace: "internal", name:"Array" });

  //makeTypeDefinition is viral and updates allTypeDefinitions
  // here we forcefully include certain types that are orphaned and not linked directly
  // through any of the endpoints
  makeTypeDefinition("ErrorResponse");

  // 'any' is translated to 'object'
  const objectType: TypeName = { namespace: "internal", name:"object" };
  allTypeNames.set("object", objectType);

  // Make endpoints, this will pull all needed types transitively
  model.endpoints = spec.endpoints.map(ep => makeEndpoint(ep)).filter(ep => ep);
  model.types = Array.from(allTypeDefinitions.values());

  // Sort endpoints and types by name for stable output order
  model.endpoints.sort((a, b) => a.name.localeCompare(b.name));
  model.types.sort((a, b) => {
    const x = a.name.namespace.localeCompare(b.name.namespace);
    return x !== 0 ? x : a.name.name.localeCompare(b.name.name);
  });

  console.log("Model: " + model.types.length + " types (" + spec.types.length + " in spec)");
  console.log("Model: " + model.endpoints.length + " endpoints (" + spec.endpoints.length + " in spec)");

  function makeEndpoint(api: Domain.Endpoint): Endpoint {
    let request = null
    let response = null

    if (api.typeMapping && spec.typeLookup[api.typeMapping.request]) {
      // Move endpoint docs to the request definition
      request = makeTypeDefinition(api.typeMapping.request) as Request;
      if (!request.description || request.description.length === 0) {
        request.description = nonEmpty(api.body && api.body.description);
      }

      request.path.forEach(prop => {
        if (prop.description && prop.description.length > 0) return; // already has some docs
        outer: for (const path of api.url.paths) {
          for (const part of path.parts) {
            if (part.name === prop.name) {
              prop.description = nonEmpty(part.description);
              break outer;
            }
          }
        }
      });

      request.query.forEach(prop => {
        if (prop.description && prop.description.length > 0) return; // already has some docs
        for (const param of api.queryStringParameters) {
          if (param.name === prop.name) {
            prop.description = nonEmpty(param.description);
            break;
          }
        }
      });

      request = request.name
    } else {
      console.log(`Request type for endpoint ${api.name} not found`)
    }

    if (api.typeMapping && spec.typeLookup[api.typeMapping.response]) {
      response = makeTypeDefinition(api.typeMapping.response).name
    } else {
      console.log(`Response type for endpoint ${api.name} not found`)
    }


    return {
      name: api.name,
      description: nonEmpty(api.documentation.description),
      docUrl: api.documentation.url,
      stability: makeStability(api.stability),
      deprecation: api.deprecated,

      request,
      requestBodyRequired: !!api.body && api.body.required,

      response,

      urls: makeUrlTemplates(api.url)
    }
  }

  function makeStability(s: Domain.Stability): Stability {
    switch (s) {
      case Domain.Stability.stable: return Stability.stable;
      case Domain.Stability.beta: return Stability.beta;
      case Domain.Stability.experimental: return Stability.experimental;
    }
  }

  function makeTypeDefinition(name: string): TypeDefinition {
    const cached = allTypeDefinitions.get(name);
    if (cached) return cached;

    function store(t: TypeDefinition): TypeDefinition {
      allTypeDefinitions.set(name, t);
      return t;
    }

    const fullName = makeTypeName(name, []);
    const specType = spec.typeLookup[name]; // existence checked in makeTypeName

    if (specType instanceof Domain.Enum) {
      // "Enum.flags" doesn't seem to be used and is ignored
      return store({
        kind: "enum",
        name: fullName,
        description: makeDescription(specType),
        annotations: makeAnnotations(specType),
        members: specType.members.map(m => {
          // Remove "alternate_name" from annotations, it's provided in "stringRepresentation"
          // Only incarnation up to now is common_options/date_math/DateMathTimeUnit - ideally we should update
          // the spec to use TypeScript string enumerations.
          const annotations = m.generatorHints && m.generatorHints.annotations || {};
          delete annotations.alternate_name;

          const r: EnumMember = {
            name: m.name,
            description: nonEmpty(m.generatorHints && m.generatorHints.description),
            annotations: nonEmptyObj(annotations)
          };

          if (m.stringRepresentation !== m.name) {
            r.stringValue = m.stringRepresentation;
          }

          return r;
        })
      });
    }

    else if (specType instanceof Domain.RequestInterface) {
      let body: ValueBody | PropertiesBody;
      if (!specType.body) {
        body = undefined;
      } else if (specType.body instanceof Array) {
        body = {
          kind: "properties",
          properties: specType.body.map(prop => makeProperty(prop, specType.openGenerics))
        }
      } else {
        body = {
          kind: "value",
          value: specType.body && makeInstanceOf(specType.body, specType.openGenerics)
        };
      }

      return store({
        kind: "request",
        name: fullName,
        description: makeDescription(specType),
        annotations: makeAnnotations(specType),
        generics: nonEmptyArr(specType.openGenerics),
        inherits: nonEmptyArr(specType.inherits.map(i => makeInherits(i, specType.openGenerics))),
        path: specType.path.map(prop => makeProperty(prop, specType.openGenerics)),
        query: specType.queryParameters.map(prop => makeProperty(prop, specType.openGenerics)),
        body: body
      });
    }

    else if (specType instanceof Domain.UnionAlias) {
      return store({
        kind: "union",
        name: fullName,
        description: makeDescription(specType),
        annotations: makeAnnotations(specType),
        items: specType.wraps.items.map(item => makeInstanceOf(item, []))
      });
    }

    else if (specType instanceof Domain.StringAlias) {
      // It's just an alias to the internal string type
      return store({
        kind: "type_alias",
        name: fullName,
        description: makeDescription(specType),
        annotations: makeAnnotations(specType),
        type: {
          kind: "instance_of",
          type: { namespace: "internal", name: "string" }
        }
      });
    }

    else if (specType instanceof Domain.NumberAlias) {
      // It's just an alias to the internal number type
      return store({
        kind: "type_alias",
        name: fullName,
        description: makeDescription(specType),
        annotations: makeAnnotations(specType),
        type: {
          kind: "instance_of",
          type: { namespace: "internal", name: "number" }
        }
      });
    }

    else if (specType instanceof Domain.Interface) {
      return store({
        kind: "interface",
        name: fullName,
        generics: nonEmptyArr(specType.openGenerics),
        inherits: nonEmptyArr(specType.inherits.map(impl => makeInherits(impl, specType.openGenerics))),
        implements: nonEmptyArr(specType.implements.map(impl => makeImplements(impl, specType.openGenerics))),
        traits: nonEmptyArr(specType.traits),
        properties: specType.properties.map(prop => makeProperty(prop, specType.openGenerics))
      });
    }

    else {
      throw Error("Unknown type " + typeof (specType))
    }
  }

  function makeImplements(impl: Domain.ImplementsReference, openGenerics: string[]): Implements {

    const type = makeTypeName(impl.type.name, openGenerics);

    return {
      type: type,
      generics: nonEmptyArr(impl.closedGenerics.map(i => makeInstanceOf(i, openGenerics)))
    };
  }

  function makeInherits(impl: Domain.InheritsReference, openGenerics: string[]): Inherits {

    // Autofix requests and responses that have self-reference generic parameters
    if (impl.closedGenerics.length > 0 && impl.type.openGenerics.length === 0) {
      if (!autoFixedGenerics.has(impl.type.name)) {
        console.log("Auto fixing implements generic parameters for " + impl.type.name);
        autoFixedGenerics.add(impl.type.name);
      }
      impl.closedGenerics = [];
    }

    const type = makeTypeName(impl.type.name, openGenerics);

    return {
      type: type,
      generics: nonEmptyArr(impl.closedGenerics.map(i => makeInstanceOf(i, openGenerics)))
    };
  }

  function makeInstanceOf(inst: Domain.InstanceOf, openGenerics: string[]): ValueOf {

    if (inst instanceof Domain.Type) {
      return {
        kind: "instance_of",
        type: makeTypeName(inst.name, openGenerics),
        generics: nonEmptyArr(inst.closedGenerics.map(g => makeInstanceOf(g, openGenerics)))
      };
    }

    else if (inst instanceof Domain.ArrayOf) {
      return {
        kind: "array_of",
        value: makeInstanceOf(inst.of, openGenerics)
      };
    }

    else if (inst instanceof Domain.UnionOf) {
      return {
        kind: "union_of",
        items: inst.items.map(i => makeInstanceOf(i, openGenerics))
      };
    }

    else if (inst instanceof Domain.Dictionary) {
      return {
        kind: "dictionary_of",
        key: makeInstanceOf(inst.key, openGenerics),
        value: makeInstanceOf(inst.value, openGenerics)
      };
    }

    else if (inst instanceof Domain.SingleKeyDictionary) {
      return {
        kind: "named_value_of",
        value: makeInstanceOf(inst.value, openGenerics)
      };
    }

    else if (inst instanceof Domain.UserDefinedValue) {
      return {
        kind: "user_defined_value"
      };
    }

    else {
      throw Error("Unnkown instance kind: " + typeof inst);
    }
  }

  function makeProperty(prop: Domain.InterfaceProperty, openGenerics: string[]): Property {
    return {
      name: prop.name,
      type: makeInstanceOf(prop.type, openGenerics),
      required: prop.required,
      description: nonEmpty(prop.generatorHints && prop.generatorHints.description),
      annotations: nonEmptyObj(prop.generatorHints && prop.generatorHints.annotations)
    };
  }

  function makeTypeName(name: string, openGenerics: string[]): TypeName {
    const cached = allTypeNames.get(name);
    if (cached) return cached;

    if (openGenerics.includes(name)) {
      // Open generics have precedence
      return { namespace: "generic", name: name };
    }

    const t = spec.typeLookup[name];
    if (!t) {
      // console.log("Type " + name + " was not found");
      // return { name: name, namespace: "unknown"};
      throw Error("Type " + name + " was not found");
    }

    const r = { namespace: t.namespace, name: t.name };
    allTypeNames.set(name, r);

    // Make sure the type has been defined
    makeTypeDefinition(name);

    return r;
  }

  function makeUrlTemplates(url: Domain.Url): UrlTemplate[] {
    return url.paths.map(path => {
      const t: UrlTemplate = {
        path: path.path,
        methods: path.methods,
        deprecation: path.deprecated
      }
      return t;
    })
  }

  function makeDescription(specType: Domain.TypeDeclaration) {
    return nonEmpty(specType.generatorHints && specType.generatorHints.description);
  }

  function makeAnnotations(specType: Domain.TypeDeclaration) {
    return nonEmptyObj(specType.generatorHints && specType.generatorHints.annotations);
  }

  function nonEmpty(str: string): string {
    if (!str || str.length === 0) {
      return undefined;
    } else {
      return str;
    }
  }

  function nonEmptyArr<T>(arr: T[]): T[] {
    if (!arr || arr.length === 0) {
      return undefined;
    } else {
      return arr;
    }
  }

  function nonEmptyObj<T>(obj: T): T {
    if (!obj || Object.keys(obj).length === 0) {
      return undefined
    } else {
      return obj;
    }
  }

  return model;
}
