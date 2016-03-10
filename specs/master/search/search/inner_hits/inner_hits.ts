
/**namespace:Search.Search.InnerHits */
/**custom_serialization*/
interface InnerHits {
	name: string;
	from: integer;
	size: integer;
	sort: Sort[];
	highlight: Highlight;
	explain: boolean;
	_source: SourceFilter;
	version: boolean;
	fielddata_fields: Field[];
	script_fields: Map<string, ScriptField>;
}