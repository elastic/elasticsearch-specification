@rest_spec_name("nodes.info")
class NodesInfoRequest extends RequestBase {
	@request_parameter()
	flat_settings: boolean;
	@request_parameter()
	timeout: Time;
}
