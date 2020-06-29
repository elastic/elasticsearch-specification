@rest_spec_name("bulk")
@class_serializer("BulkRequestFormatter")
class BulkRequest extends RequestBase {
	query_parameters: {
		pipeline: string;
		refresh: Refresh;
		routing: Routing;
		source_enabled: boolean;
		source_excludes: Field[];
		source_includes: Field[];
		timeout: Time;
		type_query_string: string;
		wait_for_active_shards: string;
	}
	body: {
		operations: BulkOperation[];
	}
}
