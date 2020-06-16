@rest_spec_name("cat.ml_data_frame_analytics")
class CatDataFrameAnalyticsRequest extends RequestBase {
	@request_parameter()
	allow_no_match: boolean;
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
