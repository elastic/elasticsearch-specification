@rest_spec_name("clear_scroll")
class ClearScrollRequest extends RequestBase {
  pathParts?: {
    scroll_id?: string | string[];
  }
  query_parameters?: {
  }
  body?: {
    scroll_id?: string[];
  }
}
