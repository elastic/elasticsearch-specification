class CountRequest extends RequestBase {
	query: QueryContainer;
	@request_parameter()
	ignore_unavailable: boolean;
	@request_parameter()
	allow_no_indices: boolean;
	@request_parameter()
	expand_wildcards: ExpandWildcards;
	@request_parameter()
	min_score: double;
	@request_parameter()
	preference: string;
	@request_parameter()
	routing: Routing;
	@request_parameter()
	query_on_query_string: string;
	@request_parameter()
	analyzer: string;
	@request_parameter()
	analyze_wildcard: boolean;
	@request_parameter()
	default_operator: DefaultOperator;
	@request_parameter()
	df: string;
	@request_parameter()
	lenient: boolean;
	@request_parameter()
	terminate_after: long;
}
