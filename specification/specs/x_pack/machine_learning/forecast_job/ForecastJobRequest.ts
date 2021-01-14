@rest_spec_name("ml.forecast")
class ForecastJobRequest extends RequestBase {
  path_parts?: {
    job_id: string;
  }
  query_parameters?: {
  }
  body?: {
    duration?: Time;
    expires_in?: Time;
  }
}
