@rest_spec_name("update")
class UpdateRequest<TDocument, TPartialDocument> extends RequestBase {
	detect_noop: boolean;
	@prop_serializer("SourceFormatter`1")
	doc: TPartialDocument;
	doc_as_upsert: boolean;
	script: Script;
	scripted_upsert: boolean;
	_source: Union<boolean, SourceFilter>;
	@prop_serializer("SourceFormatter`1")
	upsert: TDocument;
	@request_parameter()
	if_primary_term: long;
	@request_parameter()
	if_sequence_number: long;
	@request_parameter()
	lang: string;
	@request_parameter()
	refresh: Refresh;
	@request_parameter()
	retry_on_conflict: long;
	@request_parameter()
	routing: Routing;
	@request_parameter()
	source_enabled: boolean;
	@request_parameter()
	timeout: Time;
	@request_parameter()
	wait_for_active_shards: string;
}
