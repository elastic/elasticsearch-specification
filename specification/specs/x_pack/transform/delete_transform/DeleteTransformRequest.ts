@rest_spec_name("transform.delete_transform")
class DeleteTransformRequest extends RequestBase {
  pathParts?: {
    transform_id: string;
  }
  query_parameters?: {
    force?: boolean;
  }
  body?: {
  }
}
