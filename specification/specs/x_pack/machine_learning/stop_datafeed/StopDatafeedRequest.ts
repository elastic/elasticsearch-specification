@rest_spec_name("ml.stop_datafeed")
class StopDatafeedRequest extends RequestBase {
	@request_parameter()
	allow_no_datafeeds: boolean;
	force: boolean;
	timeout: Time;
}
