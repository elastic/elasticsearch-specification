@rest_spec_name("ml.put_filter")
class PutFilterRequest extends RequestBase {
  query_parameters: {
  }
  body: {
    description: string;
    items: string[];
  }
}
