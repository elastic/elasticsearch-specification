@rest_spec_name("ml.forecast")
class ForecastJobRequest extends RequestBase {
  pathParts?: {
    job_id: string;
  }
  query_parameters?: {
  }
  body?: {
    duration?: Time;
    expires_in?: Time;
  }
}
