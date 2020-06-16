@rest_spec_name("create")
@class_serializer("CreateRequestFormatter`1")
class CreateRequest<TDocument> extends RequestBase {
	document: TDocument;
	@request_parameter()
	pipeline: string;
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
