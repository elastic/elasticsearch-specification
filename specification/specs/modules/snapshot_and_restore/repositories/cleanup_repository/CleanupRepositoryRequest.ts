@rest_spec_name("snapshot.cleanup_repository")
class CleanupRepositoryRequest extends RequestBase {
  query_parameters: {
    master_timeout: Time;
    timeout: Time;
  }
  body: {
  }
}
