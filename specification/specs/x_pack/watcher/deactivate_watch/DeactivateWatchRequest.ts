@rest_spec_name("xpack.watcher.deactivate_watch")
class DeactivateWatchRequest extends RequestBase {
	@request_parameter()
	master_timeout: Time;
}
