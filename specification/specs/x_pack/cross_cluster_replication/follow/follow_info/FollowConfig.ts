class FollowConfig {
  max_outstanding_read_requests: integer;
  max_outstanding_write_requests: integer;
  max_read_request_operation_count: integer;
  max_read_request_size: string;
  max_retry_delay: Time;
  max_write_buffer_count: integer;
  max_write_buffer_size: string;
  max_write_request_operation_count: integer;
  max_write_request_size: string;
  read_poll_timeout: Time;
}
