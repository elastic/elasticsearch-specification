class MultiTermVectorOperation {
	_index: IndexName;
	_type: TypeName;
	_id: Id;
	@prop_serializer("SourceConverter")
	doc: any;
	fields: Field[];
	offsets: boolean;
	payloads: boolean;
	positions: boolean;
	term_statistics: boolean;
	field_statistics: boolean;
	filter: TermVectorFilter;
	version: long;
	version_type: VersionType;
	routing: Routing;
}
