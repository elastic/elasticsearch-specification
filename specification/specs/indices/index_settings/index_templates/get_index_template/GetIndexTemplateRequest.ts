@rest_spec_name("indices.get_template")
class GetIndexTemplateRequest extends RequestBase {
  path_parts?: {
    name?: Names;
  }
  query_parameters?: {
    flat_settings?: boolean;
    include_type_name?: boolean;
    local?: boolean;
    master_timeout?: Time;
  }
  body?: {
  }
}
