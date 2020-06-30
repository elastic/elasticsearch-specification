@rest_spec_name("cluster.pending_tasks")
class ClusterPendingTasksRequest extends RequestBase {
	query_parameters: {
		local: boolean;
		master_timeout: Time;
	}
	body: {
	}
}
