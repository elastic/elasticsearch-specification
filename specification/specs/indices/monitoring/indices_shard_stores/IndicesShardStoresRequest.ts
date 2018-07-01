@rest_spec_name("indices.shard_stores")
class IndicesShardStoresRequest extends RequestBase {
	types: TypeName[];
	@request_parameter()
	status: string[];
	@request_parameter()
	ignore_unavailable: boolean;
	@request_parameter()
	allow_no_indices: boolean;
	@request_parameter()
	expand_wildcards: ExpandWildcards;
	@request_parameter()
	operation_threading: string;
}
