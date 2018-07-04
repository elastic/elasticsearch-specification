@rest_spec_name("render_search_template")
class RenderSearchTemplateRequest extends RequestBase {
	source: string;
	inline: string;
	file: string;
	params: Dictionary<string, any>;
}
