class ClusterStatsRequest extends RequestBase {
	@request_parameter()
	flat_settings: boolean;
	@request_parameter()
	timeout: Time;
}
