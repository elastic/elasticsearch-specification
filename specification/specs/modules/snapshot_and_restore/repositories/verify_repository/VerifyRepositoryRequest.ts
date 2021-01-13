@rest_spec_name("snapshot.verify_repository")
class VerifyRepositoryRequest extends RequestBase {
  pathParts?: {
    repository: string;
  }
  query_parameters?: {
    master_timeout?: Time;
    timeout?: Time;
  }
  body?: {
  }
}
