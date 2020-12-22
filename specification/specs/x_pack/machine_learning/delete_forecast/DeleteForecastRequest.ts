@rest_spec_name("ml.delete_forecast")
class DeleteForecastRequest extends RequestBase {
  query_parameters?: {
    allow_no_forecasts?: boolean;
    timeout?: Time;
  }
  body?: {
  }
}
