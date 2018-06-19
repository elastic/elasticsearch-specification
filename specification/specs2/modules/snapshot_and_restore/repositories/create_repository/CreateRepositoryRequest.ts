@class_serializer("CreateRepositoryJsonConverter")
class CreateRepositoryRequest extends RequestBase {
	repository: SnapshotRepository;
	@request_parameter()
	master_timeout: Time;
	@request_parameter()
	timeout: Time;
	@request_parameter()
	verify: boolean;
}
