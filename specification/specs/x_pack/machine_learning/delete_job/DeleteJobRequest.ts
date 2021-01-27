@rest_spec_name('ml.delete_job')
class DeleteJobRequest extends RequestBase {
  path_parts?: {
    job_id: Id
  }
  query_parameters?: {
    force?: boolean
    wait_for_completion?: boolean
  }
  body?: {}
}
