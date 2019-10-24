@rest_spec_name("explain")
class ExplainRequest extends RequestBase {
	@request_parameter()
	analyze_wildcard: boolean;
	@request_parameter()
	analyzer: string;
	@request_parameter()
	default_operator: DefaultOperator;
	@request_parameter()
	df: string;
	@request_parameter()
	lenient: boolean;
	@request_parameter()
	preference: string;
	@request_parameter()
	query_on_query_string: string;
	@request_parameter()
	routing: Routing;
	@request_parameter()
	source_enabled: boolean;
	@request_parameter()
	source_excludes: Field[];
	@request_parameter()
	source_includes: Field[];
	query: QueryContainer;
	@request_parameter()
	stored_fields: Field[];
}
