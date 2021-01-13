@rest_spec_name("ml.get_calendars")
class GetCalendarsRequest extends RequestBase {
  pathParts?: {
    calendar_id?: string;
  }
  query_parameters?: {
  }
  body?: {
    page?: Page;
  }
}
