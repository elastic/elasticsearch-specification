@rest_spec_name('ml.update_filter')
class UpdateFilterRequest extends RequestBase {
  path_parts?: {
    filter_id: Id
  }
  query_parameters?: {}
  body?: {
    add_items?: string[]
    description?: string
    remove_items?: string[]
  }
}
