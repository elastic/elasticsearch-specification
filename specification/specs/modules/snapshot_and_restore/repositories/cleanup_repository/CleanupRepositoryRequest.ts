@rest_spec_name('snapshot.cleanup_repository')
class CleanupRepositoryRequest extends RequestBase {
  path_parts?: {
    repository: Name
  }
  query_parameters?: {
    master_timeout?: Time
    timeout?: Time
  }
  body?: {}
}
