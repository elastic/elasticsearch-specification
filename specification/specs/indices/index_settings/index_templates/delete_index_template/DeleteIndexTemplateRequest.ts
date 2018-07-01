@rest_spec_name("indices.delete_template")
class DeleteIndexTemplateRequest extends RequestBase {
	@request_parameter()
	timeout: Time;
	@request_parameter()
	master_timeout: Time;
}
