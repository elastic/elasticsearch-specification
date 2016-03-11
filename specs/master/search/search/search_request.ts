
/**namespace:Search.Search */
/**custom_serialization*/
interface search_request {
	timeout: string;
	from: integer;
	size: integer;
	explain: boolean;
	version: boolean;
	track_scores: boolean;
	min_score: double;
	terminate_after: long;
	/**custom_serialization */
	indices_boost: map<index_name, double>[];
	sort: sort[];
	suggest: map<string, suggest_bucket>[];
	highlight: highlight;
	rescore: rescore;
	fields: field[];
	fielddata_fields: field[];
	script_fields: map<string, script_field>[];
	/**custom_serialization */
	_source: source_filter;
	aggs: map<string, aggregation_container>[];
	query: query_container;
	post_filter: query_container;
	inner_hits: map<string, inner_hits_container>[];
	Preference: string;
	Routing: string;
	SearchType: SearchType;
	IgnoreUnavalable: boolean;
	Index: indices;
	Type: types;
}