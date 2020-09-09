@rest_spec_name("cat.segments")
class CatSegmentsRequest extends RequestBase {
  query_parameters: {
    bytes: Bytes;
    format: string;
    headers: string[];
    help: boolean;
    sort_by_columns: string[];
    verbose: boolean;
  }
  body: {
  }
}
