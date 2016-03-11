
/**namespace:Search.Search.InnerHits */
/**custom_serialization*/
interface inner_hits {
	name: string;
	from: integer;
	size: integer;
	sort: sort[];
	highlight: highlight;
	explain: boolean;
	_source: source_filter;
	version: boolean;
	fielddata_fields: field[];
	script_fields: map<string, script_field>[];
}