@rest_spec_name('watcher.ack_watch')
class AcknowledgeWatchRequest extends RequestBase {
  path_parts?: {
    watch_id: Name
    action_id?: Names
  }
  query_parameters?: {}
  body?: {}
}
