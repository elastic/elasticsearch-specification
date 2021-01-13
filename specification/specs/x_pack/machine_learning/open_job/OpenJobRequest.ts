@rest_spec_name("ml.open_job")
class OpenJobRequest extends RequestBase {
  pathParts?: {
    job_id: string;
  }
  query_parameters?: {
  }
  body?: {
    timeout?: Time;
  }
}
