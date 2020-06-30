@rest_spec_name("indices.exists_type")
class TypeExistsRequest extends RequestBase {
	query_parameters: {
		allow_no_indices: boolean;
		expand_wildcards: ExpandWildcards;
		ignore_unavailable: boolean;
		local: boolean;
	}
	body: {
	}
}
