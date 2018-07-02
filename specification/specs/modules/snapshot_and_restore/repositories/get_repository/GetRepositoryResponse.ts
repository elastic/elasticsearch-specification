@class_serializer("GetRepositoryResponseJsonConverter")
class GetRepositoryResponse extends ResponseBase {
	repositories: Dictionary<string, SnapshotRepository>[];
}
