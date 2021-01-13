@rest_spec_name("snapshot.delete_repository")
class DeleteRepositoryRequest extends RequestBase {
  pathParts?: {
    repository: string | string[];
  }
  query_parameters?: {
    master_timeout?: Time;
    timeout?: Time;
  }
  body?: {
  }
}
