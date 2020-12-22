@rest_spec_name("ml.post_calendar_events")
class PostCalendarEventsRequest extends RequestBase {
  query_parameters?: {
  }
  body?: {
    events?: ScheduledEvent[];
  }
}
