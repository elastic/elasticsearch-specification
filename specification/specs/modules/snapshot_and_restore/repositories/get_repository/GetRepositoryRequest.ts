@rest_spec_name("snapshot.get_repository")
class GetRepositoryRequest extends RequestBase {
  pathParts?: {
    repository?: string | string[];
  }
  query_parameters?: {
    local?: boolean;
    master_timeout?: Time;
  }
  body?: {
  }
}
