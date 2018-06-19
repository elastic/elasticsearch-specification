class PutAliasRequest extends RequestBase {
	routing: Routing;
	filter: QueryContainer;
	@request_parameter()
	timeout: Time;
	@request_parameter()
	master_timeout: Time;
}
