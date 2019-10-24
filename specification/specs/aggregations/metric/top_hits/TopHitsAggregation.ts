class TopHitsAggregation {
	doc_value_fields: Field[];
	explain: boolean;
	from: integer;
	highlight: Highlight;
	script_fields: Dictionary<string, ScriptField>;
	size: integer;
	sort: Sort[];
	source: Union<boolean, SourceFilter>;
	stored_fields: Field[];
	track_scores: boolean;
	version: boolean;
}
