@rest_spec_name("cat.indices")
class CatIndicesRequest extends RequestBase {
  query_parameters?: {
    bytes?: Bytes;
    expand_wildcards?: ExpandWildcards;
    format?: string;
    headers?: string[];
    health?: Health;
    help?: boolean;
    include_unloaded_segments?: boolean;
    local?: boolean;
    master_timeout?: Time;
    pri?: boolean;
    sort_by_columns?: string[];
    verbose?: boolean;
  }
  body?: {
  }
}
