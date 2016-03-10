
/**namespace:Aggregations.Bucket.Sampler */
interface SamplerAggregation {
	shard_size: integer;
	field: Field;
	max_docs_per_value: integer;
	script: Script;
	execution_hint: SamplerAggregationExecutionHint;
}