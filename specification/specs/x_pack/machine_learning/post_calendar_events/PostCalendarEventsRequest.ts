@rest_spec_name("ml.post_calendar_events")
class PostCalendarEventsRequest extends RequestBase {
  path_parts?: {
    calendar_id: string;
  }
  query_parameters?: {
  }
  body?: {
    events?: ScheduledEvent[];
  }
}
