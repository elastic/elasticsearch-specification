@rest_spec_name("cluster.pending_tasks")
class ClusterPendingTasksRequest extends RequestBase {
	@request_parameter()
	local: boolean;
	@request_parameter()
	master_timeout: Time;
}
