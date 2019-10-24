@rest_spec_name("ccr.put_auto_follow_pattern")
class CreateAutoFollowPatternRequest extends RequestBase {
	remote_cluster: string;
	leader_index_patterns: string[];
	follow_index_pattern: string;
	max_read_request_operation_count: integer;
	max_outstanding_read_requests: long;
	max_read_request_size: string;
	max_write_request_operation_count: integer;
	max_write_request_size: string;
	max_outstanding_write_requests: integer;
	max_write_buffer_count: integer;
	max_write_buffer_size: string;
	max_retry_delay: Time;
	max_poll_timeout: Time;
}
