@rest_spec_name("cat.shards")
class CatShardsRequest extends RequestBase {
  query_parameters?: {
    bytes?: Bytes;
    format?: string;
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
