@rest_spec_name("ml.put_filter")
class PutFilterRequest extends RequestBase {
  pathParts?: {
    filter_id: string;
  }
  query_parameters?: {
  }
  body?: {
    description?: string;
    items?: string[];
  }
}
