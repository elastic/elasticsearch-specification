@rest_spec_name("ml.start_datafeed")
class StartDatafeedRequest extends RequestBase {
	end: Date;
	start: Date;
	timeout: Time;
}
