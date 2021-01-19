import { RestSpecMapping } from './specification/rest-spec-mapping'
import _ from 'lodash'
import ts from 'byots/bin/typescript'

namespace Domain {

  export class Type {
    name: string
    required: boolean;
    closedGenerics: InstanceOf[] = [];
    constructor (name: string) {
      this.name = name
    }
  }
  export class ArrayOf {
    type = new Type('array');
    of: InstanceOf;
  }
  export class Dictionary {
    type = new Type('dictionary');
    key: InstanceOf;
    value: InstanceOf;
  }

  export class SingleKeyDictionary {
    type = new Type('singlekeydictionary');
    value: InstanceOf;
  }
  export class UnionOf {
    type = new Type('union');
    items: InstanceOf[] = [];
  }
  export class UserDefinedValue {
    type = new Type('userdefinedvalue');
  }
  export type InstanceOf = Type|ArrayOf|Dictionary|UnionOf|SingleKeyDictionary|UserDefinedValue;

  export class GeneratorDocumentation {
    constructor (description: string, keyValues: Record<string, string>) {
      this.description = description
      this.annotations = keyValues || {}

      this.alternateName = this.annotations.alternate_name
      this.customSerializationRoutine = this.annotations.prop_serializer
      this.trait = this.annotations.trait
    }

    annotations: Record<string, string>;

    /** a textual description of the type or property */
    description: string;

    /** presents a suggestion for an alternate name in case of conflicts */
    alternateName: string;

    /** marks an interface as a trait, holds a description to its purpose */
    trait: string;

    /**
     * The name of the custom serialization routine, in some cases the spec knows there is no 1-1 mapping.
     * This property can be used to generate stubs for manual serialization work
     */
    customSerializationRoutine: string;
  }

  export class TypeDeclaration {
    constructor (public name: string, public namespace: string) {}

    /** generator hinting, never null */
    generatorHints: GeneratorDocumentation;
  }

  export class Interface extends TypeDeclaration {
    properties: InterfaceProperty[] = [];
    inheritsFromUnresolved: Record<string, InstanceOf[]> = {};
    implementsFromUnresolved: Record<string, { depth: number, instanceOf: InstanceOf[]}> = {};
    inherits: Domain.InheritsReference[] = [];
    implements: Domain.ImplementsReference[] = [];
    traits: string[];
    openGenerics: string[];
    implementsUnion = (): boolean => Object.keys(this.inheritsFromUnresolved).includes('Union');
  }
  export class UnionAlias extends TypeDeclaration {
    wraps: Domain.UnionOf;
  }
  export class StringAlias extends TypeDeclaration {

  }
  export class NumberAlias extends TypeDeclaration {

  }

  export class RequestInterface extends Interface {
    body: InstanceOf | InterfaceProperty[];
    queryParameters: InterfaceProperty[];
    path: InterfaceProperty[] = [];
  }

  export class InheritsReference {
    constructor (public type: Domain.Interface) {}
    closedGenerics: Domain.InstanceOf[];
  }
  export class ImplementsReference extends InheritsReference {
    constructor (public type: Domain.Interface, public depth:number = 0) {
      super(type)
    }
    closedGenerics: Domain.InstanceOf[];
  }

  export class InterfaceProperty {
    name: string
    type: InstanceOf
    required: boolean
    kind: string
    /** generator hinting, never null */
    generatorHints: GeneratorDocumentation;
    constructor (
      name: string,
      type: InstanceOf,
      kind: 'path_parts' | 'query_parameters' | 'body',
      required: boolean = false
    ) {
      this.name = name
      this.type = type
      this.required = required
      this.kind = kind
    }
  }

  export class Enum extends TypeDeclaration {
    name: string
    flags: boolean
    members: EnumMember[]
    namespace: string
    constructor (name: string, namespace: string, flags: boolean = false) {
      super(name, namespace)
      this.name = name
      this.flags = flags
      this.members = []
      this.namespace = namespace
    }
  }

  export class EnumMember {
    constructor (public name: string, public stringRepresentation: string) {}

    /** generator hinting, never null */
    generatorHints: Domain.GeneratorDocumentation;
  }

  export class BodyDocumentation {
    description: string;
    required: boolean;
    constructor (data: any) {
      this.description = data.description
      this.required = !!data.required
    }
  }
  export class Documentation {
    description: string;
    url: string;
    constructor (data: any) {
      this.description = data.description
      this.url = data.url
    }
  }
  export enum Stability { stable, beta, experimental }

  export class Deprecation {
    version: string;
    description: string;
    constructor (data: any) {
      this.version = data.version
      this.description = data.description
    }
  }

  export class Endpoint {
    name: string;
    typeMapping: RestSpecMapping;

    documentation: Documentation;
    stability: Stability;
    body: BodyDocumentation;
    url: Url;
    queryStringParameters: QueryStringParameter[] = [];
    routeParts: RoutePart[] = [];
    deprecated: Deprecation;

    constructor (file: string, restSpecMapping: { [p: string]: RestSpecMapping }) {
      const json = require(file)
      // @ts-ignore
      this.name = _(json).keys().first()
      this.typeMapping = restSpecMapping[this.name]
      const data = json[this.name]

      this.documentation = new Documentation(data.documentation)
      // @ts-ignore
      this.queryStringParameters = _(data.params).map((v, k) => new QueryStringParameter(k, v)).value()

      const routeParts = _(data.url.paths).reduce((acc, val) => {
        for (const part in val.parts) {
          acc[part] = { required: false, ...val.parts[part] }
        }
        return acc
      }, {})
      // defines if there are required path parameters
      let allParts = []
      for (const path of data.url.paths) {
        if (path.parts) {
          allParts.push(Object.keys(path.parts))
        } else {
          allParts = []
          break
        }
      }
      if (allParts.length > 0) {
        // @ts-ignore
        intersect(...allParts).forEach(part => {
          routeParts[part].required = true
        })
      }
      for (const part in routeParts) {
        this.routeParts.push(new RoutePart(part, routeParts[part]))
      }

      if (data.body) { this.body = new BodyDocumentation(data.body) }
      if (data.deprecated) { this.deprecated = new Deprecation(data.deprecated) }

      switch (data.stability) {
        case 'stable': this.stability = Stability.stable; break
        case 'beta': this.stability = Stability.stable; break
        case 'experimental': this.stability = Stability.stable; break
      }

      this.url = new Url(data.url)

      function intersect (first: any, ...rest: any[]): any[] {
        return rest.reduce((accum, current) => {
          return accum.filter(x => current.indexOf(x) !== -1)
        }, first)
      }
    }
  }
  export class UrlPath {
    path: string;
    methods: string[];
    parts: RoutePart[];
    deprecated: Deprecation;
    constructor (data: any) {
      this.path = data.path
      this.methods = data.methods
      // @ts-ignore
      this.parts = _(data.parts).map((v, k) => new RoutePart(k, v)).value()
      if (data.deprecated) { this.deprecated = new Deprecation(data.deprecated) }
    }
  }

  export class Url {
    paths: UrlPath[];

    constructor (data: any) {
      // @ts-ignore
      this.paths = _(data.paths).map(p => new UrlPath(p)).value()
    }
  }
  export class RestSpecTypeConverter {
    // https://github.com/elastic/elasticsearch-net/blob/master/src/CodeGeneration/ApiGenerator/Domain/ApiQueryParameters.cs
    static toQueryStringType (name: string, specType: string): string {
      if (name === 'routing') return 'Routing'
      const fieldsParams = ['fields', '_source_include', '_source_exclude']
      const isFields = fieldsParams.some(n => n === name) || name.endsWith('_fields')
      const isField = name.indexOf('field') >= 0
      if (isFields || isField) {
        switch (specType) {
          case 'list': return 'Fields'
          case 'string': return isField ? 'Field' : 'Fields'
        }
      }

      const doubleFields = ['boost', 'percen', 'score']
      const isDoubleField = doubleFields.some(n => name.toLowerCase().indexOf(n) >= 0)
      switch (specType) {
        case 'boolean': return 'boolean'
        case 'list': return 'string' // todo array of strings should be a string with a comment
        case 'integer': return 'int'
        case 'date': return 'Date'
        case 'enum': return name // todo LOOKUP
        case 'number':
          return isDoubleField ? 'double' : 'long'
        case 'duration':
        case 'time':
          return 'Time'
        case 'text':
        case 'string':
        case '':
        case null:
          return 'string'
      }
      return specType + '_'
    }

    static toRouteParamType (name: string, specType: string): string {
      // https://github.com/elastic/elasticsearch-net/blob/master/src/CodeGeneration/ApiGenerator/Domain/ApiUrlPart.cs
      switch (name) {
        case 'index':
        case 'new_index':
          return specType === 'string' ? 'IndexName' : 'Indices'
        case 'target':
          return 'IndexName'
        case 'type': return specType === 'string' ? 'TypeName' : 'Types'
        case 'watch_id':
        case 'job_id':
        case 'datafeed_id':
        case 'snapshot_id':
        case 'filter_id':
        case 'calendar_id':
        case 'event_id':
        case 'forecast_id':
        case 'policy_id':
        case 'policy':
        case 'transform_id':
        case 'model_id':
        case 'id': return specType === 'string' ? 'Id' : 'Ids'
        case 'category_id': return 'CategoryId'
        case 'nodes':
        case 'node_id': return specType === 'string' ? 'NodeId' : 'NodeIds'
        case 'scroll_id': return specType === 'string' ? 'ScrollId' : 'ScrollIds'
        case 'field':
        case 'fields': return specType === 'string' ? 'Field' : 'Fields'
        case 'index_metric': return 'IndexMetrics'
        case 'metric':
        case 'watcher_stats_metric':
          return 'Metrics'
        case 'feature': return 'Features'
        case 'action_id': return 'ActionIds'
        case 'repository':
        case 'snapshot':
        case 'lang':
        case 'username':
        case 'usernames':
        case 'user':
        case 'realm':
        case 'realms':
        case 'alias':
        case 'context':
        case 'name':
        case 'thread_pool_patterns':
        case 'application':
          return specType === 'string' ? 'Name' : 'Names'
        case 'parent_task_id':
        case 'task_id': return 'TaskId'
        case 'timestamp': return 'Timestamp'
        default: return specType + '_'
      }
    }
  }

  export class QueryStringParameter {
    name: string;
    type: string;
    description: string;
    required: boolean;
    default: boolean;

    constructor (name: string, data: any) {
      this.name = name
      this.type = RestSpecTypeConverter.toQueryStringType(name, data.type)
      this.description = data.description || name
      this.required = !!data.required
      this.default = data.default || null
    }
  }

  export class RoutePart {
    name: string;
    type: string;
    description: string;
    required: boolean;

    constructor (name: string, data: any) {
      this.name = name
      this.type = RestSpecTypeConverter.toRouteParamType(name, data.type)
      this.description = data.description || name
      this.required = !!data.required
    }
  }

}
export = Domain;
