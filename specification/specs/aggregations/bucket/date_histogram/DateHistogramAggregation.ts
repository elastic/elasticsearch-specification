class DateHistogramAggregation {
	field: Field;
	script: Script;
	params: Dictionary<string, any>;
	interval: Union<DateInterval, Time>;
	format: string;
	min_doc_count: integer;
	time_zone: string;
	offset: string;
	order: HistogramOrder;
	extended_bounds: ExtendedBounds<DateMath>;
	missing: Date;
}
