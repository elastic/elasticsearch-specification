@rest_spec_name("indices.create")
class CreateIndexRequest extends RequestBase {
	settings: Dictionary<string, any>;
	mappings: Dictionary<TypeName, TypeMapping>;
	aliases: Dictionary<IndexName, Alias>;
	@request_parameter()
	wait_for_active_shards: string;
	@request_parameter()
	timeout: Time;
	@request_parameter()
	master_timeout: Time;
	@request_parameter()
	update_all_types: boolean;
}
