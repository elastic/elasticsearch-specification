class UpdateTransformResponse extends ResponseBase {
  create_time: long
  create_time_date_time: Date
  description: string
  dest: TransformDestination
  frequency: Time
  id: string
  pivot: TransformPivot
  source: TransformSource
  sync: TransformSyncContainer
  version: string
}
