@rest_spec_name("indices.put_alias")
class PutAliasRequest extends RequestBase {
	filter: QueryContainer;
	index_routing: Routing;
	is_write_index: boolean;
	routing: Routing;
	search_routing: Routing;
	@request_parameter()
	master_timeout: Time;
	@request_parameter()
	timeout: Time;
}
