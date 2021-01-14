@rest_spec_name("mtermvectors")
class MultiTermVectorsRequest extends RequestBase {
  path_parts?: {
    index?: string;
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
    docs?: MultiTermVectorOperation[];
    ids?: Id[];
  }
}
