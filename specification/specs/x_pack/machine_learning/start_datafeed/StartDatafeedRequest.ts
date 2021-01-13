@rest_spec_name("ml.start_datafeed")
class StartDatafeedRequest extends RequestBase {
  pathParts?: {
    datafeed_id: string;
  }
  query_parameters?: {
  }
  body?: {
    /** @prop_serializer NullableDateTimeOffsetEpochMillisecondsFormatter */
    end?: Date;
    /** @prop_serializer NullableDateTimeOffsetEpochMillisecondsFormatter */
    start?: Date;
    timeout?: Time;
  }
}
