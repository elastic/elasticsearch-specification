@rest_spec_name("ml.get_datafeeds")
class GetDatafeedsRequest extends RequestBase {
  pathParts?: {
    datafeed_id?: string;
  }
  query_parameters?: {
    allow_no_datafeeds?: boolean;
  }
  body?: {
  }
}
