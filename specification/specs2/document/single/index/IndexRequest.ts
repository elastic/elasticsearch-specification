@rest_spec_name("index")
class IndexRequest<TDocument> extends RequestBase {
	document: TDocument;
	@request_parameter()
	wait_for_active_shards: string;
	@request_parameter()
	op_type: OpType;
	@request_parameter()
	parent: string;
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
	pipeline: string;
}
