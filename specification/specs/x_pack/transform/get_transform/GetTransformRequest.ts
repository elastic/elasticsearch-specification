@rest_spec_name("transform.get_transform")
class GetTransformRequest extends RequestBase {
  path_parts?: {
    transform_id?: string;
  }
  query_parameters?: {
    allow_no_match?: boolean;
    from?: integer;
    size?: integer;
  }
  body?: {
  }
}
