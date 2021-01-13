@rest_spec_name("exists")
class DocumentExistsRequest extends RequestBase {
  pathParts?: {
    id: string;
    index: string;
    type?: string;
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
    version?: long;
    version_type?: VersionType;
  }
  body?: {
  }
}
