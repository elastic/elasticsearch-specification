@rest_spec_name('snapshot.status')
class SnapshotStatusRequest extends RequestBase {
  path_parts?: {
    repository?: Name
    snapshot?: Names
  }
  query_parameters?: {
    ignore_unavailable?: boolean
    master_timeout?: Time
  }
  body?: {}
}
