@rest_spec_name("cluster.allocation_explain")
class ClusterAllocationExplainRequest extends RequestBase {
	index: IndexName;
	primary: boolean;
	shard: integer;
	@request_parameter()
	include_disk_info: boolean;
	@request_parameter()
	include_yes_decisions: boolean;
}
