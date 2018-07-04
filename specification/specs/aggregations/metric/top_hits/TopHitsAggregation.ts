class TopHitsAggregation {
	from: integer;
	size: integer;
	sort: Sort[];
	_source: Union<boolean, SourceFilter>;
	highlight: Highlight;
	explain: boolean;
	script_fields: Dictionary<string, ScriptField>;
	stored_fields: Field[];
	version: boolean;
	track_scores: boolean;
}
