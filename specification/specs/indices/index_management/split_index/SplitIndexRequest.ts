@rest_spec_name("indices.split")
class SplitIndexRequest extends RequestBase {
	aliases: Dictionary<IndexName, Alias>;
	settings: Dictionary<string, any>;
	@request_parameter()
	master_timeout: Time;
	@request_parameter()
	timeout: Time;
	@request_parameter()
	wait_for_active_shards: string;
}
