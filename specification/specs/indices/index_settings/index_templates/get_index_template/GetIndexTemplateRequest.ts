@rest_spec_name("indices.get_template")
class GetIndexTemplateRequest extends RequestBase {
	@request_parameter()
	flat_settings: boolean;
	@request_parameter()
	include_type_name: boolean;
	@request_parameter()
	local: boolean;
	@request_parameter()
	master_timeout: Time;
}
