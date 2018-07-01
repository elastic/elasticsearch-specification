@rest_spec_name("xpack.watcher.ack_watch")
class AcknowledgeWatchRequest extends RequestBase {
	@request_parameter()
	master_timeout: Time;
}
