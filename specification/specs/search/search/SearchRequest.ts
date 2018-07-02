@rest_spec_name("search")
class SearchRequest {
	timeout: string;
	from: integer;
	size: integer;
	explain: boolean;
	version: boolean;
	track_scores: boolean;
	profile: boolean;
	min_score: double;
	terminate_after: long;
	indices_boost: Dictionary<IndexName, double>[];
	sort: Sort[];
	search_after: any[];
	suggest: Dictionary<string, SuggestBucket>[];
	highlight: Highlight;
	collapse: FieldCollapse;
	rescore: Rescore[];
	script_fields: Dictionary<string, ScriptField>[];
	_source: Union<boolean, SourceFilter>;
	aggs: Dictionary<string, AggregationContainer>[];
	slice: SlicedScroll;
	query: QueryContainer;
	post_filter: QueryContainer;
	index: Indices;
	type: Types;
	@request_parameter()
	stored_fields: Field[];
	@request_parameter()
	docvalue_fields: Field[];
}
