@rest_spec_name("ml.get_datafeeds")
class GetDatafeedsRequest extends RequestBase {
	@request_parameter()
	allow_no_datafeeds: boolean;
}
