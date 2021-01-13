@rest_spec_name("ml.close_job")
class CloseJobRequest extends RequestBase {
  pathParts?: {
    job_id: string;
  }
  query_parameters?: {
    allow_no_jobs?: boolean;
    force?: boolean;
    timeout?: Time;
  }
  body?: {
  }
}
