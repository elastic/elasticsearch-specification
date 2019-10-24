class GetCalendarEventsResponse extends ResponseBase implements IResponse {
	count: integer;
	events: ScheduledEvent[];
}
