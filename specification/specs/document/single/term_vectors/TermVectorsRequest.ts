@rest_spec_name("termvectors")
class TermVectorsRequest<TDocument> extends RequestBase {
	@prop_serializer("SourceFormatter`1")
	doc: TDocument;
	filter: TermVectorFilter;
	per_field_analyzer: Dictionary<Field, string>;
	@request_parameter()
	field_statistics: boolean;
	@request_parameter()
	fields: Field[];
	@request_parameter()
	offsets: boolean;
	@request_parameter()
	payloads: boolean;
	@request_parameter()
	positions: boolean;
	@request_parameter()
	preference: string;
	@request_parameter()
	realtime: boolean;
	@request_parameter()
	routing: Routing;
	@request_parameter()
	term_statistics: boolean;
	@request_parameter()
	version: long;
	@request_parameter()
	version_type: VersionType;
}
