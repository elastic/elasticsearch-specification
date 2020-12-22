@rest_spec_name("cat.nodes")
class CatNodesRequest extends RequestBase {
  query_parameters?: {
    bytes?: Bytes;
    format?: string;
    full_id?: boolean;
    headers?: string[];
    help?: boolean;
    local?: boolean;
    master_timeout?: Time;
    sort_by_columns?: string[];
    verbose?: boolean;
  }
  body?: {
  }
}
