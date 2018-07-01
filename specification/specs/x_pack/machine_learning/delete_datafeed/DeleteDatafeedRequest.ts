@rest_spec_name("xpack.ml.delete_datafeed")
class DeleteDatafeedRequest extends RequestBase {
	@request_parameter()
	force: boolean;
}
