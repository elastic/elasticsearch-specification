@rest_spec_name('ml.delete_calendar_event')
class DeleteCalendarEventRequest extends RequestBase {
  path_parts?: {
    calendar_id: Id
    event_id: Id
  }
  query_parameters?: {}
  body?: {}
}
