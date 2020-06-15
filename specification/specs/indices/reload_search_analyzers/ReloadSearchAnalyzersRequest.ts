@rest_spec_name("indices.reload_search_analyzers")
class ReloadSearchAnalyzersRequest extends RequestBase {
	@request_parameter()
	allow_no_indices: boolean;
	@request_parameter()
	expand_wildcards: ExpandWildcards;
	@request_parameter()
	ignore_unavailable: boolean;
}
