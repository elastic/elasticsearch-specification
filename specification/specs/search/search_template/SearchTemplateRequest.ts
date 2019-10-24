@rest_spec_name("search_template")
class SearchTemplateRequest extends RequestBase {
	@request_parameter()
	allow_no_indices: boolean;
	@request_parameter()
	ccs_minimize_roundtrips: boolean;
	@request_parameter()
	expand_wildcards: ExpandWildcards;
	@request_parameter()
	explain: boolean;
	@request_parameter()
	ignore_throttled: boolean;
	@request_parameter()
	ignore_unavailable: boolean;
	@request_parameter()
	preference: string;
	@request_parameter()
	profile: boolean;
	@request_parameter()
	routing: Routing;
	@request_parameter()
	scroll: Time;
	@request_parameter()
	search_type: SearchType;
	@request_parameter()
	total_hits_as_integer: boolean;
	@request_parameter()
	typed_keys: boolean;
	id: string;
	params: Dictionary<string, any>;
	source: string;
}
