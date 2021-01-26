@class_serializer('GetRepositoryResponseFormatter')
class GetRepositoryResponse extends ResponseBase {
  repositories: Dictionary<string, SnapshotRepository>
}
