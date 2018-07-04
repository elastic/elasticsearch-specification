@rest_spec_name("search_template")
class SearchTemplateRequest extends RequestBase {
	source: string;
	inline: string;
	id: string;
	params: Dictionary<string, any>;
	@request_parameter()
	ignore_unavailable: boolean;
	@request_parameter()
	allow_no_indices: boolean;
	@request_parameter()
	expand_wildcards: ExpandWildcards;
	@request_parameter()
	preference: string;
	@request_parameter()
	routing: Routing;
	@request_parameter()
	scroll: Time;
	@request_parameter()
	search_type: SearchType;
	@request_parameter()
	explain: boolean;
	@request_parameter()
	profile: boolean;
	@request_parameter()
	typed_keys: boolean;
}
