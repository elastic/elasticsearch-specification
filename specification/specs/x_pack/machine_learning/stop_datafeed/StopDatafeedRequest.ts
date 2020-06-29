@rest_spec_name("ml.stop_datafeed")
class StopDatafeedRequest extends RequestBase {
	query_parameters: {
		allow_no_datafeeds: boolean;
	}
	body: {
		force: boolean;
		timeout: Time;
	}
}
