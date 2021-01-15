@rest_spec_name("get_script")
class GetScriptRequest extends RequestBase {
  path_parts?: {
    id: Id;
  }
  query_parameters?: {
    master_timeout?: Time;
  }
  body?: {
  }
}
