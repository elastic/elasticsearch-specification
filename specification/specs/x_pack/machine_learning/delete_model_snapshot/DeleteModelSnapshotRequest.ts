@rest_spec_name('ml.delete_model_snapshot')
class DeleteModelSnapshotRequest extends RequestBase {
  path_parts?: {
    job_id: Id
    snapshot_id: Id
  }
  query_parameters?: {}
  body?: {}
}
