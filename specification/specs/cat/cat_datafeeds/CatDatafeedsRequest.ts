@rest_spec_name("cat.ml_datafeeds")
class CatDatafeedsRequest extends RequestBase {
  query_parameters: {
    allow_no_datafeeds: boolean;
    format: string;
    headers: string[];
    help: boolean;
    sort_by_columns: string[];
    verbose: boolean;
  }
  body: {
  }
}
