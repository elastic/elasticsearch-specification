@rest_spec_name('clear_scroll')
class ClearScrollRequest extends RequestBase {
  path_parts?: {
    scroll_id?: Ids
  }
  query_parameters?: {}
  body?: {
    scroll_id?: string[]
  }
}
