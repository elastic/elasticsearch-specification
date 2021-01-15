@rest_spec_name("ml.put_calendar")
class PutCalendarRequest extends RequestBase {
  path_parts?: {
    calendar_id: Id;
  }
  query_parameters?: {
  }
  body?: {
    description?: string;
  }
}
