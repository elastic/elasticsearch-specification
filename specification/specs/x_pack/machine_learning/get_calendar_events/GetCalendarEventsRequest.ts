@rest_spec_name("ml.get_calendar_events")
class GetCalendarEventsRequest extends RequestBase {
  query_parameters: {
    end: Date;
    job_id: string;
    start: string;
  }
  body: {
    from: integer;
    size: integer;
  }
}
