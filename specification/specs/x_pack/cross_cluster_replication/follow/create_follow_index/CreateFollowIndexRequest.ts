@rest_spec_name("ccr.follow")
class CreateFollowIndexRequest extends RequestBase {
	@request_parameter()
	wait_for_active_shards: string;
	remote_cluster: string;
	leader_index: IndexName;
	max_read_request_operation_count: long;
	max_outstanding_read_requests: long;
	max_request_size: string;
	max_write_request_operation_count: long;
	max_write_request_size: string;
	max_outstanding_write_requests: long;
	max_write_buffer_count: long;
	max_write_buffer_size: string;
	max_retry_delay: Time;
	read_poll_timeout: Time;
}
