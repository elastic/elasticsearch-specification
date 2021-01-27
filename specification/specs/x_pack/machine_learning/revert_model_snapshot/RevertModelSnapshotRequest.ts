@rest_spec_name('ml.revert_model_snapshot')
class RevertModelSnapshotRequest extends RequestBase {
  path_parts?: {
    job_id: Id
    snapshot_id: Id
  }
  query_parameters?: {}
  body?: {
    delete_intervening_results?: boolean
  }
}
