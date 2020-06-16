class MultiTermVectorOperation {
	@prop_serializer("SourceFormatter`1")
	doc: any;
	field_statistics: boolean;
	filter: TermVectorFilter;
	_id: Id;
	_index: IndexName;
	offsets: boolean;
	payloads: boolean;
	positions: boolean;
	routing: Routing;
	fields: Field[];
	term_statistics: boolean;
	version: long;
	version_type: VersionType;
}
