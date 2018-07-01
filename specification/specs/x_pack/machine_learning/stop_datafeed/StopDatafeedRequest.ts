@rest_spec_name("xpack.ml.stop_datafeed")
class StopDatafeedRequest extends RequestBase {
	timeout: Time;
	force: boolean;
}
