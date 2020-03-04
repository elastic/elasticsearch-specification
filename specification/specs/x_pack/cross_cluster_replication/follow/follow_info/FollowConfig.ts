class FollowConfig {
	max_read_request_operation_count: integer;
	max_read_request_size: string;
	max_outstanding_read_requests: integer;
	max_write_request_operation_count: integer;
	max_write_request_size: string;
	max_outstanding_write_requests: integer;
	max_write_buffer_count: integer;
	max_write_buffer_size: string;
	max_retry_delay: Time;
	read_poll_timeout: Time;
}
