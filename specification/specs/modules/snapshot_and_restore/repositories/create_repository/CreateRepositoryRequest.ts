@rest_spec_name("snapshot.create_repository")
@class_serializer("CreateRepositoryFormatter")
class CreateRepositoryRequest extends RequestBase {
	repository: SnapshotRepository;
	@request_parameter()
	master_timeout: Time;
	@request_parameter()
	timeout: Time;
	@request_parameter()
	verify: boolean;
}
