class ClusterAllocationExplainRequest extends RequestBase {
	index: IndexName;
	shard: integer;
	primary: boolean;
	@request_parameter()
	include_yes_decisions: boolean;
	@request_parameter()
	include_disk_info: boolean;
}
