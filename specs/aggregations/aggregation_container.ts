
/**namespace:Aggregations */
/**custom_serialization*/
interface aggregation_container {
	/**custom_serialization */
	meta: map<string, any>[];
	avg: average_aggregation;
	date_histogram: date_histogram_aggregation;
	percentiles: percentiles_aggregation;
	date_range: date_range_aggregation;
	extended_stats: extended_stats_aggregation;
	filter: filter_aggregation;
	filters: filters_aggregation;
	geo_distance: geo_distance_aggregation;
	geohash_grid: geo_hash_grid_aggregation;
	geo_bounds: geo_bounds_aggregation;
	histogram: histogram_aggregation;
	global: global_aggregation;
	ip_range: ip_range_aggregation;
	max: max_aggregation;
	min: min_aggregation;
	cardinality: cardinality_aggregation;
	missing: missing_aggregation;
	nested: nested_aggregation;
	reverse_nested: reverse_nested_aggregation;
	range: range_aggregation;
	stats: stats_aggregator;
	sum: sum_aggregation;
	terms: terms_aggregation;
	significant_terms: significant_terms_aggregation;
	value_count: value_count_aggregation;
	percentile_ranks: percentile_ranks_aggregation;
	top_hits: top_hits_aggregation;
	children: children_aggregation;
	scripted_metric: scripted_metric_aggregation;
	avg_bucket: average_bucket_aggregation;
	derivative: derivative_aggregation;
	max_bucket: max_bucket_aggregation;
	min_bucket: min_bucket_aggregation;
	sum_bucket: sum_bucket_aggregation;
	moving_avg: moving_average_aggregation;
	cumulative_sum: cumulative_sum_aggregation;
	serial_diff: serial_differencing_aggregation;
	bucket_script: bucket_script_aggregation;
	bucket_selector: bucket_selector_aggregation;
	sampler: sampler_aggregation;
	aggs: map<string, aggregation_container>;
}
