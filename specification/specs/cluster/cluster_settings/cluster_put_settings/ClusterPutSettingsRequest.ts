@rest_spec_name("cluster.put_settings")
class ClusterPutSettingsRequest extends RequestBase {
	persistent: Map<string, any>;
	transient: Map<string, any>;
	@request_parameter()
	flat_settings: boolean;
	@request_parameter()
	master_timeout: Time;
	@request_parameter()
	timeout: Time;
}
