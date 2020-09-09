@rest_spec_name("snapshot.delete_repository")
class DeleteRepositoryRequest extends RequestBase {
  query_parameters: {
    master_timeout: Time;
    timeout: Time;
  }
  body: {
  }
}
