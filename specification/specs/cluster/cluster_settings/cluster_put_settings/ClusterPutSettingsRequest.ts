@rest_spec_name("cluster.put_settings")
class ClusterPutSettingsRequest extends RequestBase {
	persistent: Dictionary<string, any>;
	transient: Dictionary<string, any>;
	@request_parameter()
	flat_settings: boolean;
	@request_parameter()
	master_timeout: Time;
	@request_parameter()
	timeout: Time;
}
