@rest_spec_name("snapshot.status")
class SnapshotStatusRequest extends RequestBase {
  pathParts?: {
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
