@rest_spec_name("cat.templates")
class CatTemplatesRequest extends RequestBase {
  query_parameters: {
    format: string;
    headers: string[];
    help: boolean;
    local: boolean;
    master_timeout: Time;
    sort_by_columns: string[];
    verbose: boolean;
  }
  body: {
  }
}
