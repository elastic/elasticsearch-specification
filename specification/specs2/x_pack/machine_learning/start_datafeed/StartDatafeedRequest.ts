class StartDatafeedRequest extends RequestBase {
	timeout: Time;
	@prop_serializer("EpochMillisecondsDateTimeJsonConverter")
	start: Date;
	@prop_serializer("EpochMillisecondsDateTimeJsonConverter")
	end: Date;
}
