@rest_spec_name("snapshot.delete")
class DeleteSnapshotRequest extends RequestBase {
  pathParts?: {
    repository: string;
    snapshot: string;
  }
  query_parameters?: {
    master_timeout?: Time;
  }
  body?: {
  }
}
