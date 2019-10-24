@rest_spec_name("indices.forcemerge")
class ForceMergeRequest extends RequestBase {
	@request_parameter()
	allow_no_indices: boolean;
	@request_parameter()
	expand_wildcards: ExpandWildcards;
	@request_parameter()
	flush: boolean;
	@request_parameter()
	ignore_unavailable: boolean;
	@request_parameter()
	max_num_segments: long;
	@request_parameter()
	only_expunge_deletes: boolean;
}
