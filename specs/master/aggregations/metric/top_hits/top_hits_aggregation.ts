
/**namespace:Aggregations.Metric.TopHits */
interface TopHitsAggregation {
	from: integer;
	size: integer;
	sort: Sort[];
	_source: SourceFilter;
	highlight: Highlight;
	explain: boolean;
	/**custom_serialization */
	script_fields: Map<string, ScriptField>;
	fielddata_fields: Field[];
	version: boolean;
}