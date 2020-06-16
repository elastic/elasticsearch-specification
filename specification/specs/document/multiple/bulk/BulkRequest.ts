@rest_spec_name("bulk")
@class_serializer("BulkRequestFormatter")
class BulkRequest extends RequestBase {
	operations: BulkOperation[];
	@request_parameter()
	pipeline: string;
	@request_parameter()
	refresh: Refresh;
	@request_parameter()
	routing: Routing;
	@request_parameter()
	source_enabled: boolean;
	@request_parameter()
	source_excludes: Field[];
	@request_parameter()
	source_includes: Field[];
	@request_parameter()
	timeout: Time;
	@request_parameter()
	type_query_string: string;
	@request_parameter()
	wait_for_active_shards: string;
}
