@rest_spec_name("get")
class GetRequest extends RequestBase {
  query_parameters: {
    preference: string;
    realtime: boolean;
    refresh: boolean;
    routing: Routing;
    source_enabled: boolean;
    _source_excludes: Field[];
    _source_includes: Field[];
    stored_fields: Field[];
    version: long;
    version_type: VersionType;
    _source: Union<boolean, Union<string, string[]>>;
  }
  body: {
  }
}
