@rest_spec_name("sql.translate")
class TranslateSqlRequest extends RequestBase {
  query_parameters?: {
  }
  body?: {
    fetch_size?: integer;
    filter?: QueryContainer;
    query?: string;
    time_zone?: string;
  }
}
