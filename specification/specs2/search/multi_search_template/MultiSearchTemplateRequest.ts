@class_serializer("MultiSearchTemplateJsonConverter")
class MultiSearchTemplateRequest extends RequestBase {
	operations: Map<string, SearchTemplateRequest>;
	@request_parameter()
	search_type: SearchType;
	@request_parameter()
	typed_keys: boolean;
	@request_parameter()
	max_concurrent_searches: long;
}
