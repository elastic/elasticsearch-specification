@rest_spec_name("cat.ml_datafeeds")
class CatDatafeedsRequest extends RequestBase {
	@request_parameter()
	allow_no_datafeeds: boolean;
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
