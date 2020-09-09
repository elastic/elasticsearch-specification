@rest_spec_name("put_script")
class PutScriptRequest extends RequestBase {
  query_parameters: {
    master_timeout: Time;
    timeout: Time;
  }
  body: {
    script: StoredScript;
  }
}
