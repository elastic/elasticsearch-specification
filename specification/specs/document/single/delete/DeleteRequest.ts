@rest_spec_name("delete")
class DeleteRequest extends RequestBase {
	@request_parameter()
	if_primary_term: long;
	@request_parameter()
	if_sequence_number: long;
	@request_parameter()
	refresh: Refresh;
	@request_parameter()
	routing: Routing;
	@request_parameter()
	timeout: Time;
	@request_parameter()
	version: long;
	@request_parameter()
	version_type: VersionType;
	@request_parameter()
	wait_for_active_shards: string;
}
