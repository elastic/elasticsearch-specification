@rest_spec_name("transform.update_transform")
class UpdateTransformRequest extends RequestBase {
  path_parts?: {
    transform_id: Name;
  }
  query_parameters?: {
    defer_validation?: boolean;
  }
  body?: {
    description?: string;
    dest?: TransformDestination;
    frequency?: Time;
    source?: TransformSource;
    sync?: TransformSyncContainer;
  }
}
