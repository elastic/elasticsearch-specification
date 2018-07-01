@rest_spec_name("xpack.ml.start_datafeed")
class StartDatafeedRequest extends RequestBase {
	timeout: Time;
	@prop_serializer("EpochMillisecondsDateTimeJsonConverter")
	start: Date;
	@prop_serializer("EpochMillisecondsDateTimeJsonConverter")
	end: Date;
}
