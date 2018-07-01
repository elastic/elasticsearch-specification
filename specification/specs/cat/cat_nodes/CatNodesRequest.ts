@rest_spec_name("cat.nodes")
class CatNodesRequest extends RequestBase {
	@request_parameter()
	format: string;
	@request_parameter()
	full_id: boolean;
	@request_parameter()
	local: boolean;
	@request_parameter()
	master_timeout: Time;
	@request_parameter()
	headers: string[];
	@request_parameter()
	help: boolean;
	@request_parameter()
	sort_by_columns: string[];
	@request_parameter()
	verbose: boolean;
}
