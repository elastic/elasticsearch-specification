@rest_spec_name("watcher.stats")
class WatcherStatsRequest extends RequestBase {
  path_parts?: {
    metric?: string | string[];
  }
  query_parameters?: {
    emit_stacktraces?: boolean;
  }
  body?: {
  }
}
