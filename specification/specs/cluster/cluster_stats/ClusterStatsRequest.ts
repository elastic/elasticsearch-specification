@rest_spec_name("cluster.stats")
class ClusterStatsRequest extends RequestBase {
	query_parameters: {
		flat_settings: boolean;
		timeout: Time;
	}
	body: {
	}
}
