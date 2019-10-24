@rest_spec_name("cat.indices")
class CatIndicesRequest extends RequestBase {
	@request_parameter()
	bytes: Bytes;
	@request_parameter()
	format: string;
	@request_parameter()
	headers: string[];
	@request_parameter()
	health: Health;
	@request_parameter()
	help: boolean;
	@request_parameter()
	include_unloaded_segments: boolean;
	@request_parameter()
	local: boolean;
	@request_parameter()
	master_timeout: Time;
	@request_parameter()
	pri: boolean;
	@request_parameter()
	sort_by_columns: string[];
	@request_parameter()
	verbose: boolean;
}
