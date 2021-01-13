@rest_spec_name("cat.ml_jobs")
class CatJobsRequest extends CatRequestBase {
  pathParts?: {
    job_id?: string;
  }
  query_parameters?: {
    allow_no_jobs?: boolean;
    bytes?: Bytes;
  }
  body?: {
  }
}
