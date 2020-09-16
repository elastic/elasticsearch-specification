/**
 * @type_stability stable
 */
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
    track_total_hits: boolean | integer;
    typed_keys: boolean;
    rest_total_hits_as_int: boolean;
    _source_excludes: Union<Field, Field[]>;
    _source_includes: Union<Field, Field[]>;
    seq_no_primary_term: boolean;
    q: string;
    size: integer;
  }
  body: {
    aggs: Dictionary<string, AggregationContainer>;
    aggregations: Dictionary<string, AggregationContainer>;
    collapse: FieldCollapse;
    explain: boolean;
    from: integer;
    highlight: Highlight;
    track_total_hits: boolean | integer;
    /** @prop_serializer IndicesBoostFormatter */
    indices_boost: Array<Dictionary<IndexName, double>>;
    docvalue_fields: Array<Field | DocValueField>;
    min_score: double;
    post_filter: QueryContainer;
    profile: boolean;
    query: QueryContainer;
    rescore: Rescore | Rescore[];
    script_fields: Dictionary<string, ScriptField>;
    search_after: Array<integer | string>;
    size: integer;
    slice: SlicedScroll;
    sort: Array<SingleKeyDictionary<Sort | SortOrder> | string>;
    _source: Union<Union<boolean, Field>, Union<Field[], SourceFilter>>;
    suggest: Dictionary<string, SuggestBucket>;
    terminate_after: long;
    timeout: string;
    track_scores: boolean;
    version: boolean;
    seq_no_primary_term: boolean;
    stored_fields: Field | Field[];
  }
}
