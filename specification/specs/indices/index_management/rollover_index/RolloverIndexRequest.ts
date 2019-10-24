@rest_spec_name("indices.rollover")
class RolloverIndexRequest extends RequestBase {
	aliases: Dictionary<IndexName, Alias>;
	conditions: RolloverConditions;
	mappings: TypeMapping;
	settings: Dictionary<string, any>;
	@request_parameter()
	dry_run: boolean;
	@request_parameter()
	include_type_name: boolean;
	@request_parameter()
	master_timeout: Time;
	@request_parameter()
	timeout: Time;
	@request_parameter()
	wait_for_active_shards: string;
}
