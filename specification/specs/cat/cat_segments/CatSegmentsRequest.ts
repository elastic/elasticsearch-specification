@rest_spec_name("cat.segments")
class CatSegmentsRequest extends RequestBase {
	@request_parameter()
	bytes: Bytes;
	@request_parameter()
	format: string;
	@request_parameter()
	headers: string[];
	@request_parameter()
	help: boolean;
	@request_parameter()
	sort_by_columns: string[];
	@request_parameter()
	verbose: boolean;
}
