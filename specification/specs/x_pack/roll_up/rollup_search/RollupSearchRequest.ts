@rest_spec_name("rollup.rollup_search")
class RollupSearchRequest extends RequestBase {
	@request_parameter()
	total_hits_as_integer: boolean;
	@request_parameter()
	typed_keys: boolean;
	aggregations: Dictionary<string, AggregationContainer>;
	query: QueryContainer;
	size: integer;
}
