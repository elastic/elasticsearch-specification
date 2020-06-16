@rest_spec_name("mget")
@class_serializer("MultiGetRequestFormatter")
class MultiGetRequest extends RequestBase {
	@request_parameter()
	stored_fields: Field[];
	docs: MultiGetOperation[];
	@request_parameter()
	preference: string;
	@request_parameter()
	realtime: boolean;
	@request_parameter()
	refresh: boolean;
	@request_parameter()
	routing: Routing;
	@request_parameter()
	source_enabled: boolean;
	@request_parameter()
	source_excludes: Field[];
	@request_parameter()
	source_includes: Field[];
}
