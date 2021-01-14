@rest_spec_name("ml.update_model_snapshot")
class UpdateModelSnapshotRequest extends RequestBase {
  path_parts?: {
    job_id: string;
    snapshot_id: string;
  }
  query_parameters?: {
  }
  body?: {
    description?: string;
    retain?: boolean;
  }
}
