@rest_spec_name("ml.put_calendar")
class PutCalendarRequest extends RequestBase {
  pathParts?: {
    calendar_id: string;
  }
  query_parameters?: {
  }
  body?: {
    description?: string;
  }
}
