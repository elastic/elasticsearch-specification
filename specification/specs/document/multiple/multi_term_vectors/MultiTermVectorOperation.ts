class MultiTermVectorOperation {
	/** @prop_serializer SourceFormatter`1 */
	doc: any;
	fields: Field[];
	field_statistics: boolean;
	filter: TermVectorFilter;
	_id: Id;
	_index: IndexName;
	offsets: boolean;
	payloads: boolean;
	positions: boolean;
	routing: Routing;
	term_statistics: boolean;
	version: long;
	version_type: VersionType;
}
