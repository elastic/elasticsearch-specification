@rest_spec_name("xpack.watcher.delete_watch")
class DeleteWatchRequest extends RequestBase {
	@request_parameter()
	master_timeout: Time;
}
