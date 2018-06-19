class ClusterPendingTasksRequest extends RequestBase {
	@request_parameter()
	local: boolean;
	@request_parameter()
	master_timeout: Time;
}
