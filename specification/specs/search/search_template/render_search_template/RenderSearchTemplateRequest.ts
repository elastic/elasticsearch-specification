@rest_spec_name("render_search_template")
class RenderSearchTemplateRequest extends RequestBase {
	file: string;
	params: Dictionary<string, any>;
	source: string;
}
