@rest_spec_name("cat.ml_datafeeds")
class CatDatafeedsRequest extends CatRequestBase {
  pathParts?: {
    datafeed_id?: string;
  }
  query_parameters?: {
    allow_no_datafeeds?: boolean;
  }
  body?: {
  }
}
