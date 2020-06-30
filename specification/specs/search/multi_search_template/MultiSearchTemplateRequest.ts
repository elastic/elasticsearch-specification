@rest_spec_name("msearch_template")
@class_serializer("MultiSearchTemplateFormatter")
class MultiSearchTemplateRequest extends RequestBase {
	query_parameters: {
		ccs_minimize_roundtrips: boolean;
		max_concurrent_searches: long;
		search_type: SearchType;
		total_hits_as_integer: boolean;
		typed_keys: boolean;
	}
	body: {
		operations: Dictionary<string, SearchTemplateRequest>;
	}
}
