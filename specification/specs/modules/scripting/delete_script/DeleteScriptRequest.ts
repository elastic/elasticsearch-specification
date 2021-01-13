@rest_spec_name("delete_script")
class DeleteScriptRequest extends RequestBase {
  pathParts?: {
    id: string;
  }
  query_parameters?: {
    master_timeout?: Time;
    timeout?: Time;
  }
  body?: {
  }
}
