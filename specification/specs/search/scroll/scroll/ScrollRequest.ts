@rest_spec_name("scroll")
class ScrollRequest extends RequestBase {
  query_parameters: {
    total_hits_as_integer: boolean;
  }
  body: {
    scroll: Time;
    scroll_id: string;
  }
}
