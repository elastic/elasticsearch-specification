@rest_spec_name("snapshot.get")
class GetSnapshotRequest extends RequestBase {
  path_parts?: {
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
