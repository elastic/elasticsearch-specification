@rest_spec_name("ml.get_jobs")
class GetJobsRequest extends RequestBase {
  pathParts?: {
    job_id?: string;
  }
  query_parameters?: {
    allow_no_jobs?: boolean;
  }
  body?: {
  }
}
