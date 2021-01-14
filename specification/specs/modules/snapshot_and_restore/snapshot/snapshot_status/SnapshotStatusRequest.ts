@rest_spec_name("snapshot.status")
class SnapshotStatusRequest extends RequestBase {
  path_parts?: {
    repository?: string;
    snapshot?: string | string[];
  }
  query_parameters?: {
    ignore_unavailable?: boolean;
    master_timeout?: Time;
  }
  body?: {
  }
}
