@rest_spec_name('transform.delete_transform')
class DeleteTransformRequest extends RequestBase {
  path_parts?: {
    transform_id: Name
  }
  query_parameters?: {
    force?: boolean
  }
  body?: {}
}
