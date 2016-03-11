
/**namespace:Aggregations.Bucket.Histogram */
interface histogram_aggregation {
	field: field;
	script: script;
	interval: double;
	min_doc_count: integer;
	order: histogram_order;
	extended_bounds: extended_bounds<double>;
	pre_offset: long;
	post_offset: long;
	missing: double;
}