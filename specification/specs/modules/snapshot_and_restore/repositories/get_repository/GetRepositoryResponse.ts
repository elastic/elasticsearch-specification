@class_serializer("GetRepositoryResponseFormatter")
class GetRepositoryResponse extends ResponseBase implements IResponse {
	repositories: Dictionary<string, SnapshotRepository>;
}
