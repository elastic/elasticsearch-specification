@rest_spec_name("put_script")
class PutScriptRequest extends RequestBase {
  path_parts?: {
    id: string;
    context?: string;
  }
  query_parameters?: {
    master_timeout?: Time;
    timeout?: Time;
  }
  body?: {
    script?: StoredScript;
  }
}
