@rest_spec_name("ilm.put_lifecycle")
class PutLifecycleRequest extends RequestBase {
  pathParts?: {
    policy: string;
  }
  query_parameters?: {
  }
  body?: {
    policy?: Policy;
  }
}
