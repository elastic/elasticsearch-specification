class BulkAliasRequest extends RequestBase {
	actions: AliasAction[];
	@request_parameter()
	timeout: Time;
	@request_parameter()
	master_timeout: Time;
}
