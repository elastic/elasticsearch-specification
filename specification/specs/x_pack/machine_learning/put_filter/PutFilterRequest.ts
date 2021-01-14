@rest_spec_name("ml.put_filter")
class PutFilterRequest extends RequestBase {
  path_parts?: {
    filter_id: string;
  }
  query_parameters?: {
  }
  body?: {
    description?: string;
    items?: string[];
  }
}
