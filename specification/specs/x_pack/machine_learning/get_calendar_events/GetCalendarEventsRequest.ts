@rest_spec_name("ml.get_calendar_events")
class GetCalendarEventsRequest extends RequestBase {
	@request_parameter()
	end: Date;
	@request_parameter()
	job_id: string;
	@request_parameter()
	start: string;
	from: integer;
	size: integer;
}
