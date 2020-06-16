@rest_spec_name("indices.put_settings")
@class_serializer("UpdateIndexSettingsRequestFormatter")
class UpdateIndexSettingsRequest extends RequestBase {
	index_settings: Dictionary<string, any>;
	@request_parameter()
	allow_no_indices: boolean;
	@request_parameter()
	expand_wildcards: ExpandWildcards;
	@request_parameter()
	flat_settings: boolean;
	@request_parameter()
	ignore_unavailable: boolean;
	@request_parameter()
	master_timeout: Time;
	@request_parameter()
	preserve_existing: boolean;
	@request_parameter()
	timeout: Time;
}
