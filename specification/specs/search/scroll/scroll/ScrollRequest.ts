@rest_spec_name('scroll')
class ScrollRequest extends RequestBase {
  path_parts?: {
    scroll_id?: Id
  }
  query_parameters?: {
    total_hits_as_integer?: boolean
    scroll?: Time
  }
  body?: {
    scroll?: Time
    scroll_id?: string
  }
}
