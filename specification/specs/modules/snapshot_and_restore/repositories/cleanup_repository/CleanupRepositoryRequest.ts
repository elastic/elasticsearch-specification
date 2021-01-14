@rest_spec_name("snapshot.cleanup_repository")
class CleanupRepositoryRequest extends RequestBase {
  path_parts?: {
    repository: string;
  }
  query_parameters?: {
    master_timeout?: Time;
    timeout?: Time;
  }
  body?: {
  }
}
