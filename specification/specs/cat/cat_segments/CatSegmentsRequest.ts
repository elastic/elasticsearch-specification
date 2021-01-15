@rest_spec_name("cat.segments")
class CatSegmentsRequest extends CatRequestBase {
  path_parts?: {
    index?: Indices;
  }
  query_parameters?: {
    bytes?: Bytes;
  }
  body?: {
  }
}
