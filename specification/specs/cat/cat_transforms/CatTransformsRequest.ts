@rest_spec_name("cat.transforms")
class CatTransformsRequest extends RequestBase {
	@request_parameter()
	allow_no_match: boolean;
	@request_parameter()
	format: string;
	@request_parameter()
	from: integer;
	@request_parameter()
	headers: string[];
	@request_parameter()
	help: boolean;
	@request_parameter()
	size: integer;
	@request_parameter()
	sort_by_columns: string[];
	@request_parameter()
	verbose: boolean;
}
