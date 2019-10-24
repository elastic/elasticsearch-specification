@rest_spec_name("indices.create")
class CreateIndexRequest extends RequestBase {
	aliases: Dictionary<IndexName, Alias>;
	mappings: TypeMapping;
	settings: Dictionary<string, any>;
	@request_parameter()
	include_type_name: boolean;
	@request_parameter()
	master_timeout: Time;
	@request_parameter()
	timeout: Time;
	@request_parameter()
	wait_for_active_shards: string;
}
