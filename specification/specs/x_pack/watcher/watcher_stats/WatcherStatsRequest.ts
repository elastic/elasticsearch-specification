@rest_spec_name("watcher.stats")
class WatcherStatsRequest extends RequestBase {
  pathParts?: {
    metric?: string | string[];
  }
  query_parameters?: {
    emit_stacktraces?: boolean;
  }
  body?: {
  }
}
