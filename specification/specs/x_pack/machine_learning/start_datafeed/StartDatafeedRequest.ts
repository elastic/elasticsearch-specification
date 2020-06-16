@rest_spec_name("ml.start_datafeed")
class StartDatafeedRequest extends RequestBase {
	@prop_serializer("NullableDateTimeOffsetEpochMillisecondsFormatter")
	end: Date;
	@prop_serializer("NullableDateTimeOffsetEpochMillisecondsFormatter")
	start: Date;
	timeout: Time;
}
