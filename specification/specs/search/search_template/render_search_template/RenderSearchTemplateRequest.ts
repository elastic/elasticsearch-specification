@rest_spec_name("render_search_template")
class RenderSearchTemplateRequest extends RequestBase {
  query_parameters: {
  }
  body: {
    file: string;
    params: Dictionary<string, any>;
    source: string;
  }
}
