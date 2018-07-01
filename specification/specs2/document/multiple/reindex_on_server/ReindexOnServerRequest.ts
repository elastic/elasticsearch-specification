@rest_spec_name("reindex")
class ReindexOnServerRequest extends RequestBase {
	source: ReindexSource;
	dest: ReindexDestination;
	script: Script;
	size: long;
	conflicts: Conflicts;
	@request_parameter()
	refresh: boolean;
	@request_parameter()
	timeout: Time;
	@request_parameter()
	wait_for_active_shards: string;
	@request_parameter()
	wait_for_completion: boolean;
	@request_parameter()
	requests_per_second: long;
	@request_parameter()
	slices: long;
}
