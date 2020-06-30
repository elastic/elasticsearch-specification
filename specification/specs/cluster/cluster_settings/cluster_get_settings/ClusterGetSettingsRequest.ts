@rest_spec_name("cluster.get_settings")
class ClusterGetSettingsRequest extends RequestBase {
	query_parameters: {
		flat_settings: boolean;
		include_defaults: boolean;
		master_timeout: Time;
		timeout: Time;
	}
	body: {
	}
}
