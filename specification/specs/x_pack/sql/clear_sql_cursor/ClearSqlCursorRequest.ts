@rest_spec_name("sql.clear_cursor")
class ClearSqlCursorRequest extends RequestBase {
  query_parameters?: {
  }
  body?: {
    cursor?: string;
  }
}
