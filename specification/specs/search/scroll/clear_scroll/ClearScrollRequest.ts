@rest_spec_name("clear_scroll")
class ClearScrollRequest extends RequestBase {
  query_parameters: {
  }
  body: {
    scroll_id: string[];
  }
}
