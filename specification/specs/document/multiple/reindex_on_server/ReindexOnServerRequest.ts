@rest_spec_name("reindex")
class ReindexOnServerRequest extends RequestBase {
	conflicts: Conflicts;
	dest: ReindexDestination;
	script: Script;
	size: long;
	max_docs: long;
	source: ReindexSource;
	@request_parameter()
	refresh: boolean;
	@request_parameter()
	requests_per_second: long;
	@request_parameter()
	scroll: Time;
	@request_parameter()
	slices: long;
	@request_parameter()
	timeout: Time;
	@request_parameter()
	wait_for_active_shards: string;
	@request_parameter()
	wait_for_completion: boolean;
}
