@rest_spec_name("cluster.health")
class ClusterHealthRequest extends RequestBase {
	@request_parameter()
	expand_wildcards: ExpandWildcards;
	@request_parameter()
	level: Level;
	@request_parameter()
	local: boolean;
	@request_parameter()
	master_timeout: Time;
	@request_parameter()
	timeout: Time;
	@request_parameter()
	wait_for_active_shards: string;
	@request_parameter()
	wait_for_events: WaitForEvents;
	@request_parameter()
	wait_for_no_initializing_shards: boolean;
	@request_parameter()
	wait_for_no_relocating_shards: boolean;
	@request_parameter()
	wait_for_nodes: string;
	@request_parameter()
	wait_for_status: WaitForStatus;
}
