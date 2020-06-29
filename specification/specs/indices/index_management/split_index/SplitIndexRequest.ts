@rest_spec_name("indices.split")
class SplitIndexRequest extends RequestBase {
	query_parameters: {
		master_timeout: Time;
		timeout: Time;
		wait_for_active_shards: string;
	}
	body: {
		aliases: Dictionary<IndexName, Alias>;
		settings: Dictionary<string, any>;
	}
}
