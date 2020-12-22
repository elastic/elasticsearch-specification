@rest_spec_name("snapshot.create_repository")
@class_serializer("CreateRepositoryFormatter")
class CreateRepositoryRequest extends RequestBase {
  query_parameters?: {
    master_timeout?: Time;
    timeout?: Time;
    verify?: boolean;
  }
  body?: {
    repository?: SnapshotRepository;
  }
}
