@rest_spec_name("ml.delete_forecast")
class DeleteForecastRequest extends RequestBase {
	@request_parameter()
	allow_no_forecasts: boolean;
	@request_parameter()
	timeout: Time;
}
