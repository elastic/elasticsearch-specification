@rest_spec_name("indices.delete")
class DeleteIndexRequest extends RequestBase {
	@request_parameter()
	allow_no_indices: boolean;
	@request_parameter()
	expand_wildcards: ExpandWildcards;
	@request_parameter()
	ignore_unavailable: boolean;
	@request_parameter()
	master_timeout: Time;
	@request_parameter()
	timeout: Time;
}
