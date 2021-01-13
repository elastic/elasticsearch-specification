@rest_spec_name("transform.start_transform")
class StartTransformRequest extends RequestBase {
  pathParts?: {
    transform_id: string;
  }
  query_parameters?: {
    timeout?: Time;
  }
  body?: {
  }
}
