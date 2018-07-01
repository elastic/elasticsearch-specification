@rest_spec_name("search_template")
class SearchTemplateRequest {
	params: Map<string, any>;
	source: string;
	inline: string;
	id: string;
	index: Indices;
	type: Types;
}
