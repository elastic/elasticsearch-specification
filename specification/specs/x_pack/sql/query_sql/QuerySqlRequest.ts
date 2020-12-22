@rest_spec_name("sql.query")
class QuerySqlRequest extends RequestBase {
  query_parameters?: {
    format?: string;
  }
  body?: {
    columnar?: boolean;
    cursor?: string;
    fetch_size?: integer;
    filter?: QueryContainer;
    query?: string;
    time_zone?: string;
  }
}
