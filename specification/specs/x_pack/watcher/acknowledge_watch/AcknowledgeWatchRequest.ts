@rest_spec_name("watcher.ack_watch")
class AcknowledgeWatchRequest extends RequestBase {
  path_parts?: {
    watch_id: string;
    action_id?: string | string[];
  }
  query_parameters?: {
  }
  body?: {
  }
}
