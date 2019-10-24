@rest_spec_name("indices.exists_template")
class IndexTemplateExistsRequest extends RequestBase {
	@request_parameter()
	flat_settings: boolean;
	@request_parameter()
	local: boolean;
	@request_parameter()
	master_timeout: Time;
}
