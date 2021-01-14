@rest_spec_name("clear_scroll")
class ClearScrollRequest extends RequestBase {
  path_parts?: {
    scroll_id?: string | string[];
  }
  query_parameters?: {
  }
  body?: {
    scroll_id?: string[];
  }
}
