class DateHistogramAggregation {
	extended_bounds: ExtendedBounds<DateMath>;
	field: Field;
	format: string;
	interval: Union<DateInterval, Time>;
	calendar_interval: Union<DateInterval, Time>;
	fixed_interval: Union<DateInterval, Time>;
	min_doc_count: integer;
	missing: Date;
	offset: string;
	order: HistogramOrder;
	params: Dictionary<string, any>;
	script: Script;
	time_zone: string;
}
