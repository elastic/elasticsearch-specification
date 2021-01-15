@rest_spec_name("cat.snapshots")
class CatSnapshotsRequest extends CatRequestBase {
  path_parts?: {
    repository?: Names;
  }
  query_parameters?: {
    ignore_unavailable?: boolean;
  }
  body?: {
  }
}
