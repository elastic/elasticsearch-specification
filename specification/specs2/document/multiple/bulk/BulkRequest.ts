@class_serializer("BulkRequestJsonConverter")
class BulkRequest extends RequestBase {
	operations: BulkOperation[];
	@request_parameter()
	wait_for_active_shards: string;
	@request_parameter()
	refresh: Refresh;
	@request_parameter()
	routing: Routing;
	@request_parameter()
	timeout: Time;
	@request_parameter()
	fields: Field[];
	@request_parameter()
	source_enabled: boolean;
	@request_parameter()
	source_exclude: Field[];
	@request_parameter()
	source_include: Field[];
	@request_parameter()
	pipeline: string;
}
