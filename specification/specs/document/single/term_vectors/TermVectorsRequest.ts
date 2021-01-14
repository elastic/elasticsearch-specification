@rest_spec_name("termvectors")
class TermVectorsRequest<TDocument> extends RequestBase {
  path_parts?: {
    index: string;
    id?: string;
    type?: string;
  }
  query_parameters?: {
    fields?: Field[];
    field_statistics?: boolean;
    offsets?: boolean;
    payloads?: boolean;
    positions?: boolean;
    preference?: string;
    realtime?: boolean;
    routing?: Routing;
    term_statistics?: boolean;
    version?: long;
    version_type?: VersionType;
  }
  body?: {
    /** @prop_serializer SourceFormatter`1 */
    doc?: TDocument;
    filter?: TermVectorFilter;
    per_field_analyzer?: Dictionary<Field, string>;
  }
}
