@rest_spec_name("indices.shard_stores")
class IndicesShardStoresRequest extends RequestBase {
  pathParts?: {
    index?: string | string[];
  }
  query_parameters?: {
    allow_no_indices?: boolean;
    expand_wildcards?: ExpandWildcards;
    ignore_unavailable?: boolean;
    status?: string[];
  }
  body?: {
  }
}
