@rest_spec_name("ml.update_filter")
class UpdateFilterRequest extends RequestBase {
  query_parameters: {
  }
  body: {
    add_items: string[];
    description: string;
    remove_items: string[];
  }
}
