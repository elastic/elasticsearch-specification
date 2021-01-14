@rest_spec_name("transform.start_transform")
class StartTransformRequest extends RequestBase {
  path_parts?: {
    transform_id: string;
  }
  query_parameters?: {
    timeout?: Time;
  }
  body?: {
  }
}
