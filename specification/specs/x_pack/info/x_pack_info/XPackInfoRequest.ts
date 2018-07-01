@rest_spec_name("xpack.info")
class XPackInfoRequest extends RequestBase {
	@request_parameter()
	categories: string[];
}
