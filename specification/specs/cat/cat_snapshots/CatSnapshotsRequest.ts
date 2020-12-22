@rest_spec_name("cat.snapshots")
class CatSnapshotsRequest extends RequestBase {
  query_parameters?: {
    format?: string;
    headers?: string[];
    help?: boolean;
    ignore_unavailable?: boolean;
    master_timeout?: Time;
    sort_by_columns?: string[];
    verbose?: boolean;
  }
  body?: {
  }
}
