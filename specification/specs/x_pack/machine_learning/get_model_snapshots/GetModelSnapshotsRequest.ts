@rest_spec_name('ml.get_model_snapshots')
class GetModelSnapshotsRequest extends RequestBase {
  path_parts?: {
    job_id: Id
    snapshot_id?: Id
  }
  query_parameters?: {}
  body?: {
    desc?: boolean
    /** @prop_serializer NullableDateTimeOffsetEpochMillisecondsFormatter */
    end?: Date
    page?: Page
    sort?: Field
    /** @prop_serializer NullableDateTimeOffsetEpochMillisecondsFormatter */
    start?: Date
  }
}
