@rest_spec_name("mget")
@class_serializer("MultiGetRequestFormatter")
class MultiGetRequest extends RequestBase {
	query_parameters: {
		preference: string;
		realtime: boolean;
		refresh: boolean;
		routing: Routing;
		source_enabled: boolean;
		source_excludes: Field[];
		source_includes: Field[];
		stored_fields: Field[];
	}
	body: {
		docs: MultiGetOperation[];
	}
}
