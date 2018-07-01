class InnerHits {
	name: string;
	from: integer;
	size: integer;
	sort: Sort[];
	highlight: Highlight;
	explain: boolean;
	_source: Union<boolean, SourceFilter>;
	version: boolean;
	script_fields: Map<string, ScriptField>;
	docvalue_fields: Field[];
}
