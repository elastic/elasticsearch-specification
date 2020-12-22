@rest_spec_name("ml.forecast")
class ForecastJobRequest extends RequestBase {
  query_parameters?: {
  }
  body?: {
    duration?: Time;
    expires_in?: Time;
  }
}
