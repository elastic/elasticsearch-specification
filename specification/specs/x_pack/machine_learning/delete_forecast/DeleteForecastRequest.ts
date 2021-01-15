@rest_spec_name("ml.delete_forecast")
class DeleteForecastRequest extends RequestBase {
  path_parts?: {
    job_id: Id;
    forecast_id?: Id;
  }
  query_parameters?: {
    allow_no_forecasts?: boolean;
    timeout?: Time;
  }
  body?: {
  }
}
