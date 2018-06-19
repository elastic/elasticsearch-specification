@class_serializer("GetRepositoryResponseJsonConverter")
class GetRepositoryResponse extends ResponseBase {
	repositories: Map<string, SnapshotRepository>;
}
