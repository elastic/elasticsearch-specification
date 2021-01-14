@rest_spec_name("transform.put_transform")
class PutTransformRequest extends RequestBase {
  path_parts?: {
    transform_id: string;
  }
  query_parameters?: {
    defer_validation?: boolean;
  }
  body?: {
    description?: string;
    dest?: TransformDestination;
    frequency?: Time;
    pivot?: TransformPivot;
    source?: TransformSource;
    sync?: TransformSyncContainer;
  }
}
