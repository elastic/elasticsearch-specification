@rest_spec_name("transform.update_transform")
class UpdateTransformRequest extends RequestBase {
  pathParts?: {
    transform_id: string;
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
