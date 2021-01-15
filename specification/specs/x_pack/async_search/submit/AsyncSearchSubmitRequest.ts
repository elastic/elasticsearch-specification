@rest_spec_name("async_search.submit")
class AsyncSearchSubmitRequest extends RequestBase {
  path_parts?: {
    index?: Indices;
  }
  query_parameters?: {
  }
  body?: {
    aggs?: Dictionary<string, AggregationContainer>;
    allow_no_indices?: boolean;
    allow_partial_search_results?: boolean;
    analyzer?: string;
    analyze_wildcard?: boolean;
    batched_reduce_size?: long;
    collapse?: FieldCollapse;
    default_operator?: DefaultOperator;
    df?: string;
    docvalue_fields?: Field[];
    expand_wildcards?: ExpandWildcards;
    explain?: boolean;
    from?: integer;
    highlight?: Highlight;
    ignore_throttled?: boolean;
    ignore_unavailable?: boolean;
    /** @prop_serializer IndicesBoostFormatter */
    indices_boost?: Dictionary<IndexName, double>;
    keep_alive?: Time;
    keep_on_completion?: boolean;
    lenient?: boolean;
    max_concurrent_shard_requests?: long;
    min_score?: double;
    post_filter?: QueryContainer;
    preference?: string;
    profile?: boolean;
    query?: QueryContainer;
    query_on_query_string?: string;
    request_cache?: boolean;
    rescore?: Rescore[];
    routing?: Routing;
    script_fields?: Dictionary<string, ScriptField>;
    search_after?: UserDefinedValue[];
    search_type?: SearchType;
    sequence_number_primary_term?: boolean;
    size?: integer;
    sort?: Sort[];
    _source?: Union<boolean, SourceFilter>;
    stats?: string[];
    stored_fields?: Field[];
    suggest?: Dictionary<string, SuggestBucket>;
    suggest_field?: Field;
    suggest_mode?: SuggestMode;
    suggest_size?: long;
    suggest_text?: string;
    terminate_after?: long;
    timeout?: string;
    track_scores?: boolean;
    track_total_hits?: boolean;
    typed_keys?: boolean;
    version?: boolean;
    wait_for_completion_timeout?: Time;
  }
}
