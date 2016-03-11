
/**namespace:Aggregations.Bucket.Sampler */
interface sampler_aggregation {
	shard_size: integer;
	field: field;
	max_docs_per_value: integer;
	script: script;
	execution_hint: SamplerAggregationExecutionHint;
}