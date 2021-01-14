@rest_spec_name("cat.indices")
class CatIndicesRequest extends CatRequestBase {
  path_parts?: {
    index?: string | string[];
  }
  query_parameters?: {
    bytes?: Bytes;
    expand_wildcards?: ExpandWildcards;
    health?: Health;
    include_unloaded_segments?: boolean;
    pri?: boolean;
  }
  body?: {
  }
}
