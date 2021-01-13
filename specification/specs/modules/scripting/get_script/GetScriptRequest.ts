@rest_spec_name("get_script")
class GetScriptRequest extends RequestBase {
  pathParts?: {
    id: string;
  }
  query_parameters?: {
    master_timeout?: Time;
  }
  body?: {
  }
}
