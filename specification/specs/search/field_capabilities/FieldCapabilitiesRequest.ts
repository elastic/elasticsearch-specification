@rest_spec_name("field_caps")
class FieldCapabilitiesRequest extends RequestBase {
	@request_parameter()
	allow_no_indices: boolean;
	@request_parameter()
	expand_wildcards: ExpandWildcards;
	@request_parameter()
	fields: Field[];
	@request_parameter()
	ignore_unavailable: boolean;
	@request_parameter()
	include_unmapped: boolean;
}
