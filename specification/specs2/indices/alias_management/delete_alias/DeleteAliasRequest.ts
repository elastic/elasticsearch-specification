@rest_spec_name("indices.delete_alias")
class DeleteAliasRequest extends RequestBase {
	@request_parameter()
	timeout: Time;
	@request_parameter()
	master_timeout: Time;
}
