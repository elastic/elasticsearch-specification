@rest_spec_name("transform.get_transform_stats")
class GetTransformStatsRequest extends RequestBase {
  pathParts?: {
    transform_id: string;
  }
  query_parameters?: {
    allow_no_match?: boolean;
    from?: long;
    size?: long;
  }
  body?: {
  }
}
