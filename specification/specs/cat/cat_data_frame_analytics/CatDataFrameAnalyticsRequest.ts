@rest_spec_name("cat.ml_data_frame_analytics")
class CatDataFrameAnalyticsRequest extends CatRequestBase {
  pathParts?: {
    id?: string;
  }
  query_parameters?: {
    allow_no_match?: boolean;
    bytes?: Bytes;
  }
  body?: {
  }
}
