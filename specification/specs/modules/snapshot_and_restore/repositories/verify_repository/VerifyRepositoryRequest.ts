@rest_spec_name('snapshot.verify_repository')
class VerifyRepositoryRequest extends RequestBase {
  path_parts?: {
    repository: Name
  }
  query_parameters?: {
    master_timeout?: Time
    timeout?: Time
  }
  body?: {}
}
