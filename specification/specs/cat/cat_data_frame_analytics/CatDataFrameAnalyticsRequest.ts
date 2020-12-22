@rest_spec_name("cat.ml_data_frame_analytics")
class CatDataFrameAnalyticsRequest extends RequestBase {
  query_parameters?: {
    allow_no_match?: boolean;
    bytes?: Bytes;
    format?: string;
    headers?: string[];
    help?: boolean;
    sort_by_columns?: string[];
    verbose?: boolean;
  }
  body?: {
  }
}
