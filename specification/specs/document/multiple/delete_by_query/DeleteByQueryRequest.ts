@rest_spec_name("delete_by_query")
class DeleteByQueryRequest extends RequestBase {
  path_parts?: {
    index: Indices;
    type?: TypeNames;
  }
  query_parameters?: {
    allow_no_indices?: boolean;
    analyzer?: string;
    analyze_wildcard?: boolean;
    conflicts?: Conflicts;
    default_operator?: DefaultOperator;
    df?: string;
    expand_wildcards?: ExpandWildcards;
    from?: long;
    ignore_unavailable?: boolean;
    lenient?: boolean;
    preference?: string;
    query_on_query_string?: string;
    refresh?: boolean;
    request_cache?: boolean;
    requests_per_second?: long;
    routing?: Routing;
    scroll?: Time;
    scroll_size?: long;
    search_timeout?: Time;
    search_type?: SearchType;
    size?: long;
    slices?: long;
    sort?: string[];
    source_enabled?: boolean;
    source_excludes?: Field[];
    source_includes?: Field[];
    stats?: string[];
    terminate_after?: long;
    timeout?: Time;
    version?: boolean;
    wait_for_active_shards?: string;
    wait_for_completion?: boolean;
  }
  body?: {
    max_docs?: long;
    query?: QueryContainer;
    slice?: SlicedScroll;
  }
}
