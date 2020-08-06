@rest_spec_name("search")
class SearchRequest extends RequestBase {
	query_parameters: {
		allow_no_indices: boolean;
		allow_partial_search_results: boolean;
		analyzer: string;
		analyze_wildcard: boolean;
		batched_reduce_size: long;
		ccs_minimize_roundtrips: boolean;
		default_operator: DefaultOperator;
		df: string;
		docvalue_fields: Field[];
		expand_wildcards: ExpandWildcards;
		ignore_throttled: boolean;
		ignore_unavailable: boolean;
		lenient: boolean;
		max_concurrent_shard_requests: long;
		preference: string;
		pre_filter_shard_size: long;
		query_on_query_string: string;
		request_cache: boolean;
		routing: Routing;
		scroll: Time;
		search_type: SearchType;
		sequence_number_primary_term: boolean;
		stats: string[];
		stored_fields: Field[];
		suggest_field: Field;
		suggest_mode: SuggestMode;
		suggest_size: long;
		suggest_text: string;
		total_hits_as_integer: boolean;
		track_total_hits: boolean;
		typed_keys: boolean;
    rest_total_hits_as_int: boolean;
	}
	body: {
		aggs: Dictionary<string, AggregationContainer>;
		collapse: FieldCollapse;
		explain: boolean;
		from: integer;
		highlight: Highlight;
		/** @prop_serializer IndicesBoostFormatter */
		indices_boost: Dictionary<IndexName, double>;
		min_score: double;
		post_filter: QueryContainer;
		profile: boolean;
		query: QueryContainer;
		rescore: Rescore[];
		script_fields: Dictionary<string, ScriptField>;
		search_after: any[];
		size: integer;
		slice: SlicedScroll;
		sort: Sort[];
		_source: Union<boolean, SourceFilter>;
		suggest: Dictionary<string, SuggestBucket>;
		terminate_after: long;
		timeout: string;
		track_scores: boolean;
		version: boolean;
	}
}
