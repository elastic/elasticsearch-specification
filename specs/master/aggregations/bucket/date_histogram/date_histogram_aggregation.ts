
/**namespace:Aggregations.Bucket.DateHistogram */
interface date_histogram_aggregation {
	field: field;
	script: script;
	params: map<string, any>[];
	interval: union<DateInterval, time>;
	format: string;
	min_doc_count: integer;
	time_zone: string;
	factor: integer;
	offset: string;
	order: histogram_order;
	extended_bounds: extended_bounds<Date>;
	missing: Date;
}