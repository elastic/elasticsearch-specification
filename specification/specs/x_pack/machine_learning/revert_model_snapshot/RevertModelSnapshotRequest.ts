@rest_spec_name("ml.revert_model_snapshot")
class RevertModelSnapshotRequest extends RequestBase {
  path_parts?: {
    job_id: string;
    snapshot_id: string;
  }
  query_parameters?: {
  }
  body?: {
    delete_intervening_results?: boolean;
  }
}
