@rest_spec_name("nodes.info")
class NodesInfoRequest extends RequestBase {
	query_parameters: {
		flat_settings: boolean;
		timeout: Time;
	}
	body: {
	}
}
