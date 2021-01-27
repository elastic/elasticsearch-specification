@rest_spec_name('transform.get_transform_stats')
class GetTransformStatsRequest extends RequestBase {
  path_parts?: {
    transform_id: Name
  }
  query_parameters?: {
    allow_no_match?: boolean
    from?: long
    size?: long
  }
  body?: {}
}
