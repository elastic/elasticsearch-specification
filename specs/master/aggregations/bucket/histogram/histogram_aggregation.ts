
/**namespace:Aggregations.Bucket.Histogram */
interface HistogramAggregation {
	field: Field;
	script: Script;
	interval: double;
	min_doc_count: integer;
	order: HistogramOrder;
	extended_bounds: ExtendedBounds<double>;
	pre_offset: long;
	post_offset: long;
	missing: double;
}