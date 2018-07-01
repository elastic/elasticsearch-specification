@rest_spec_name("indices.update_aliases")
class BulkAliasRequest extends RequestBase {
	actions: AliasAction[];
	@request_parameter()
	timeout: Time;
	@request_parameter()
	master_timeout: Time;
}
