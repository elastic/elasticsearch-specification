class PercolateQuery {
	field: Field;
	document_type: TypeName;
	@prop_serializer("SourceConverter")
	document: any;
	id: Id;
	index: IndexName;
	type: TypeName;
	routing: Routing;
	preference: string;
	version: long;
}
