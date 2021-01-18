@rest_spec_name("count")
class CountRequest extends RequestBase {
  path_parts?: {
    index?: Indices;
    type?: TypeNames;
  }
  query_parameters?: {
    allow_no_indices?: boolean;
    analyzer?: string;
    analyze_wildcard?: boolean;
    default_operator?: DefaultOperator;
    df?: string;
    expand_wildcards?: ExpandWildcards;
    ignore_throttled?: boolean;
    ignore_unavailable?: boolean;
    lenient?: boolean;
    min_score?: double;
    preference?: string;
    query_on_query_string?: string;
    routing?: Routing;
    terminate_after?: long;
  }
  body?: {
    query?: QueryContainer;
  }
}
