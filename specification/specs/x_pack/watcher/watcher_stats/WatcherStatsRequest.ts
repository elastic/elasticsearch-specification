@rest_spec_name("watcher.stats")
class WatcherStatsRequest extends RequestBase {
  query_parameters: {
    emit_stacktraces: boolean;
  }
  body: {
  }
}
