@rest_spec_name("snapshot.delete_repository")
class DeleteRepositoryRequest extends RequestBase {
  path_parts?: {
    repository: string | string[];
  }
  query_parameters?: {
    master_timeout?: Time;
    timeout?: Time;
  }
  body?: {
  }
}
