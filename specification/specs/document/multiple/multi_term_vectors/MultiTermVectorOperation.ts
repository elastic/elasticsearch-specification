class MultiTermVectorOperation {
	document: any;
	field_statistics: boolean;
	filter: TermVectorFilter;
	id: Id;
	index: IndexName;
	offsets: boolean;
	payloads: boolean;
	positions: boolean;
	routing: Routing;
	fields: Field[];
	term_statistics: boolean;
	version: long;
	version_type: VersionType;
}
