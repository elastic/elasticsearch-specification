@rest_spec_name("msearch_template")
@class_serializer("MultiSearchTemplateFormatter")
class MultiSearchTemplateRequest extends RequestBase {
	@request_parameter()
	ccs_minimize_roundtrips: boolean;
	@request_parameter()
	max_concurrent_searches: long;
	@request_parameter()
	search_type: SearchType;
	@request_parameter()
	total_hits_as_integer: boolean;
	@request_parameter()
	typed_keys: boolean;
	operations: Dictionary<string, SearchTemplateRequest>;
}
