class FollowConfig {
	maximum_read_request_operation_count: integer;
	maximum_read_request_size: string;
	maximum_outstanding_read_requests: integer;
	maximum_write_request_operation_count: integer;
	maximum_write_request_size: string;
	maximum_outstanding_write_requests: integer;
	maximum_write_buffer_count: integer;
	maximum_write_buffer_size: string;
	maximum_retry_delay: Time;
	read_poll_timeout: Time;
}
