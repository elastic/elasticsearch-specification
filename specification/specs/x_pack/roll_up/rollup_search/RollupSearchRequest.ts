@rest_spec_name("rollup.rollup_search")
class RollupSearchRequest extends RequestBase {
  path_parts?: {
    index: string | string[];
    type?: string;
  }
  query_parameters?: {
    total_hits_as_integer?: boolean;
    typed_keys?: boolean;
  }
  body?: {
    aggs?: Dictionary<string, AggregationContainer>;
    query?: QueryContainer;
    size?: integer;
  }
}
