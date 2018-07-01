@rest_spec_name("indices.rollover")
class RolloverIndexRequest extends RequestBase {
	conditions: RolloverConditions;
	settings: Map<string, any>;
	aliases: Map<IndexName, Alias>;
	mappings: Map<TypeName, TypeMapping>;
	@request_parameter()
	timeout: Time;
	@request_parameter()
	dry_run: boolean;
	@request_parameter()
	master_timeout: Time;
	@request_parameter()
	wait_for_active_shards: string;
}
