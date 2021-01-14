@rest_spec_name("nodes.hot_threads")
class NodesHotThreadsRequest extends RequestBase {
  path_parts?: {
    node_id?: string | string[];
  }
  query_parameters?: {
    ignore_idle_threads?: boolean;
    interval?: Time;
    snapshots?: long;
    threads?: long;
    thread_type?: ThreadType;
    timeout?: Time;
  }
  body?: {
  }
}
