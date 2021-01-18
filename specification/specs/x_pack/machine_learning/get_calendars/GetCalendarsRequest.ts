@rest_spec_name("ml.get_calendars")
class GetCalendarsRequest extends RequestBase {
  path_parts?: {
    calendar_id?: Id;
  }
  query_parameters?: {
  }
  body?: {
    page?: Page;
  }
}
