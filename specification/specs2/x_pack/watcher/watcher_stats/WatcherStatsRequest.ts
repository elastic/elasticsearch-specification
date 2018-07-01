@rest_spec_name("xpack.watcher.stats")
class WatcherStatsRequest extends RequestBase {
	@request_parameter()
	emit_stacktraces: boolean;
}
