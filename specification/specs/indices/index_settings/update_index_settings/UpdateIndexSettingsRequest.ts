@rest_spec_name("indices.put_settings")
@class_serializer("UpdateIndexSettingsRequestFormatter")
class UpdateIndexSettingsRequest extends RequestBase {
  query_parameters?: {
    allow_no_indices?: boolean;
    expand_wildcards?: ExpandWildcards;
    flat_settings?: boolean;
    ignore_unavailable?: boolean;
    master_timeout?: Time;
    preserve_existing?: boolean;
    timeout?: Time;
  }
  body?: {
    index?: Dictionary<string, UserDefinedValue>;
  }
}
