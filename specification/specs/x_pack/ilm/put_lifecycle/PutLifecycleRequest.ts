@rest_spec_name("ilm.put_lifecycle")
class PutLifecycleRequest extends RequestBase {
  path_parts?: {
    policy: string;
  }
  query_parameters?: {
  }
  body?: {
    policy?: Policy;
  }
}
