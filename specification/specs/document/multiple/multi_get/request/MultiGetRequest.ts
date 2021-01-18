@rest_spec_name("mget")
@class_serializer("MultiGetRequestFormatter")
class MultiGetRequest extends RequestBase {
  path_parts?: {
    index?: IndexName;
    type?: TypeName;
  }
  query_parameters?: {
    preference?: string;
    realtime?: boolean;
    refresh?: boolean;
    routing?: Routing;
    source_enabled?: boolean;
    source_excludes?: Field[];
    source_includes?: Field[];
    stored_fields?: Field[];
  }
  body?: {
    docs?: MultiGetOperation[];
  }
}

class MultiGetOperation {
  can_be_flattened?: boolean;
  _id: Id;
  _index: IndexName;
  routing?: string;
  _source?: boolean | SourceFilter;
  stored_fields?: Field[];
  version?: long;
  version_type?: VersionType;
}
