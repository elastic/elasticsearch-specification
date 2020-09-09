@rest_spec_name("indices.validate_query")
class ValidateQueryRequest extends RequestBase {
  query_parameters: {
    allow_no_indices: boolean;
    all_shards: boolean;
    analyzer: string;
    analyze_wildcard: boolean;
    default_operator: DefaultOperator;
    df: string;
    expand_wildcards: ExpandWildcards;
    explain: boolean;
    ignore_unavailable: boolean;
    lenient: boolean;
    query_on_query_string: string;
    rewrite: boolean;
  }
  body: {
    query: QueryContainer;
  }
}
