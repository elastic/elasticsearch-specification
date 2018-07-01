@rest_spec_name("nodes.hot_threads")
class NodesHotThreadsRequest extends RequestBase {
	@request_parameter()
	interval: Time;
	@request_parameter()
	snapshots: long;
	@request_parameter()
	threads: long;
	@request_parameter()
	ignore_idle_threads: boolean;
	@request_parameter()
	thread_type: ThreadType;
	@request_parameter()
	timeout: Time;
}
