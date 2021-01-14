@rest_spec_name("ccr.follow")
class CreateFollowIndexRequest extends RequestBase {
  path_parts?: {
    index: string;
  }
  query_parameters?: {
    wait_for_active_shards?: string;
  }
  body?: {
    leader_index?: IndexName;
    max_outstanding_read_requests?: long;
    max_outstanding_write_requests?: long;
    max_read_request_operation_count?: long;
    max_read_request_size?: string;
    max_retry_delay?: Time;
    max_write_buffer_count?: long;
    max_write_buffer_size?: string;
    max_write_request_operation_count?: long;
    max_write_request_size?: string;
    read_poll_timeout?: Time;
    remote_cluster?: string;
  }
}
