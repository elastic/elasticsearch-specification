@rest_spec_name("cat.segments")
class CatSegmentsRequest extends CatRequestBase {
  pathParts?: {
    index?: string | string[];
  }
  query_parameters?: {
    bytes?: Bytes;
  }
  body?: {
  }
}
