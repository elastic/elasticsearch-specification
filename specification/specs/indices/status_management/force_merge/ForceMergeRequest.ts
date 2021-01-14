@rest_spec_name("indices.forcemerge")
class ForceMergeRequest extends RequestBase {
  path_parts?: {
    index?: string | string[];
  }
  query_parameters?: {
    allow_no_indices?: boolean;
    expand_wildcards?: ExpandWildcards;
    flush?: boolean;
    ignore_unavailable?: boolean;
    max_num_segments?: long;
    only_expunge_deletes?: boolean;
  }
  body?: {
  }
}
