class AutoDateHistogramAggregation {
	field: Field;
	buckets: integer;
	format: string;
	missing: Date;
	offset: string;
	params: Dictionary<string, any>;
	script: Script;
	time_zone: string;
	minimum_interval: MinimumInterval;
}
