class InnerHits {
	collapse: FieldCollapse;
	docvalue_fields: Field[];
	explain: boolean;
	from: integer;
	highlight: Highlight;
	ignore_unmapped: boolean;
	name: string;
	script_fields: Dictionary<string, ScriptField>;
	size: integer;
	sort: Sort[];
	_source: Union<boolean, SourceFilter>;
	version: boolean;
}
