
/**namespace:Aggregations.Bucket.DateHistogram */
interface DateHistogramAggregation {
	field: Field;
	script: Script;
	params: Map<string, any>;
	interval: Union<DateInterval, Time>;
	format: string;
	min_doc_count: integer;
	time_zone: string;
	factor: integer;
	offset: string;
	order: HistogramOrder;
	extended_bounds: ExtendedBounds<Date>;
	missing: Date;
}