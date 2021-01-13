@rest_spec_name("cat.snapshots")
class CatSnapshotsRequest extends CatRequestBase {
  pathParts?: {
    repository?: string | string[];
  }
  query_parameters?: {
    ignore_unavailable?: boolean;
  }
  body?: {
  }
}
