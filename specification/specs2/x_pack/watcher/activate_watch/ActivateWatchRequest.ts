@rest_spec_name("xpack.watcher.activate_watch")
class ActivateWatchRequest extends RequestBase {
	@request_parameter()
	master_timeout: Time;
}
