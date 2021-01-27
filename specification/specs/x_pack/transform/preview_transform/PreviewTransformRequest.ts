@rest_spec_name('transform.preview_transform')
class PreviewTransformRequest extends RequestBase {
  query_parameters?: {}
  body?: {
    description?: string
    dest?: TransformDestination
    frequency?: Time
    pivot?: TransformPivot
    source?: TransformSource
    sync?: TransformSyncContainer
  }
}
