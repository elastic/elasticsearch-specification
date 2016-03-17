
/**namespace:Aggregations.Metric.TopHits */
interface top_hits_aggregation {
	from: integer;
	size: integer;
	sort: sort[];
	_source: source_filter;
	highlight: highlight;
	explain: boolean;
	/**custom_serialization */
	script_fields: map<string, script_field>[];
	fielddata_fields: field[];
	version: boolean;
}