class AutoFollowPattern {
  follow_index_pattern: string
  leader_index_patterns: string[]
  max_outstanding_read_requests: long
  max_outstanding_write_requests: integer
  read_poll_timeout: Time
  max_read_request_operation_count: integer
  max_read_request_size: string
  max_retry_delay: Time
  max_write_buffer_count: integer
  max_write_buffer_size: string
  max_write_request_operation_count: integer
  max_write_request_size: string
  remote_cluster: string
}
