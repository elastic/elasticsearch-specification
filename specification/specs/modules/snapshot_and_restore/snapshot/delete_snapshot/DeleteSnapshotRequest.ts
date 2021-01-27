@rest_spec_name('snapshot.delete')
class DeleteSnapshotRequest extends RequestBase {
  path_parts?: {
    repository: Name
    snapshot: Name
  }
  query_parameters?: {
    master_timeout?: Time
  }
  body?: {}
}
