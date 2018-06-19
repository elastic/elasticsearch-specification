class CreateIndexRequest extends RequestBase {
	settings: Map<string, any>;
	mappings: Map<TypeName, TypeMapping>;
	aliases: Map<IndexName, Alias>;
	@request_parameter()
	wait_for_active_shards: string;
	@request_parameter()
	timeout: Time;
	@request_parameter()
	master_timeout: Time;
	@request_parameter()
	update_all_types: boolean;
}
