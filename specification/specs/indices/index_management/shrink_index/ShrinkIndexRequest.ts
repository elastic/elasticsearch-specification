@rest_spec_name("indices.shrink")
class ShrinkIndexRequest extends RequestBase {
	settings: Dictionary<string, any>;
	aliases: Dictionary<IndexName, Alias>;
	@request_parameter()
	timeout: Time;
	@request_parameter()
	master_timeout: Time;
	@request_parameter()
	wait_for_active_shards: string;
}
