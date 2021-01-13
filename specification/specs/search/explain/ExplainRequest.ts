@rest_spec_name("explain")
class ExplainRequest extends RequestBase {
  pathParts?: {
    id: string;
    index: string;
    type?: string;
  }
  query_parameters?: {
    analyzer?: string;
    analyze_wildcard?: boolean;
    default_operator?: DefaultOperator;
    df?: string;
    lenient?: boolean;
    preference?: string;
    query_on_query_string?: string;
    routing?: Routing;
    source_enabled?: boolean;
    source_excludes?: Field[];
    source_includes?: Field[];
    stored_fields?: Field[];
  }
  body?: {
    query?: QueryContainer;
  }
}
