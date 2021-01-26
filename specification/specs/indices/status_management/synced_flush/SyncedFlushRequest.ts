@rest_spec_name('indices.flush_synced')
class SyncedFlushRequest extends RequestBase {
  path_parts?: {
    index?: Indices
  }
  query_parameters?: {
    allow_no_indices?: boolean
    expand_wildcards?: ExpandWildcards
    ignore_unavailable?: boolean
  }
  body?: {}
}
