@rest_spec_name("snapshot.get")
class GetSnapshotRequest extends RequestBase {
  pathParts?: {
    repository: string;
    snapshot: string | string[];
  }
  query_parameters?: {
    ignore_unavailable?: boolean;
    master_timeout?: Time;
    verbose?: boolean;
  }
  body?: {
  }
}
