@rest_spec_name("update")
class UpdateRequest<TDocument, TPartialDocument> extends RequestBase {
	script: Script;
	@prop_serializer("SourceConverter")
	upsert: TDocument;
	doc_as_upsert: boolean;
	@prop_serializer("SourceConverter")
	doc: TPartialDocument;
	detect_noop: boolean;
	scripted_upsert: boolean;
	_source: Union<boolean, SourceFilter>;
	fields: Field[];
	@request_parameter()
	wait_for_active_shards: string;
	@request_parameter()
	source_enabled: boolean;
	@request_parameter()
	lang: string;
	@request_parameter()
	parent: string;
	@request_parameter()
	refresh: Refresh;
	@request_parameter()
	retry_on_conflict: long;
	@request_parameter()
	routing: Routing;
	@request_parameter()
	timeout: Time;
	@request_parameter()
	version: long;
	@request_parameter()
	version_type: VersionType;
}
