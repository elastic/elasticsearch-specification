class InnerHits {
	collapse: FieldCollapse;
	doc_value_fields: Field[];
	explain: boolean;
	from: integer;
	highlight: Highlight;
	ignore_unmapped: boolean;
	name: string;
	script_fields: Dictionary<string, ScriptField>;
	size: integer;
	sort: Sort[];
	source: Union<boolean, SourceFilter>;
	version: boolean;
}
