@rest_spec_name("cat.health")
class CatHealthRequest extends RequestBase {
  query_parameters?: {
    format?: string;
    headers?: string[];
    help?: boolean;
    include_timestamp?: boolean;
    local?: boolean;
    master_timeout?: Time;
    sort_by_columns?: string[];
    verbose?: boolean;
  }
  body?: {
  }
}
