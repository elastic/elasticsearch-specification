@rest_spec_name("cat.snapshots")
class CatSnapshotsRequest extends RequestBase {
	@request_parameter()
	format: string;
	@request_parameter()
	headers: string[];
	@request_parameter()
	help: boolean;
	@request_parameter()
	ignore_unavailable: boolean;
	@request_parameter()
	master_timeout: Time;
	@request_parameter()
	sort_by_columns: string[];
	@request_parameter()
	verbose: boolean;
}
