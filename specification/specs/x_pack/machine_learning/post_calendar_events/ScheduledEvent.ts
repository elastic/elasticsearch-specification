class ScheduledEvent {
	calendar_id: Id;
	description: string;
	@prop_serializer("NullableDateTimeOffsetEpochMillisecondsFormatter")
	start_time: Date;
	@prop_serializer("NullableDateTimeOffsetEpochMillisecondsFormatter")
	end_time: Date;
	event_id: Id;
}
