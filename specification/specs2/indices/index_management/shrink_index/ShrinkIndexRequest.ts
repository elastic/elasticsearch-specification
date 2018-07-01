@rest_spec_name("indices.shrink")
class ShrinkIndexRequest extends RequestBase {
	settings: Map<string, any>;
	aliases: Map<IndexName, Alias>;
	@request_parameter()
	timeout: Time;
	@request_parameter()
	master_timeout: Time;
	@request_parameter()
	wait_for_active_shards: string;
}
