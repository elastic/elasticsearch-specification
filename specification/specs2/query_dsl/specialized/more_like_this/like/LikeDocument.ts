class LikeDocument {
	_index: IndexName;
	_type: TypeName;
	_id: Id;
	fields: Field[];
	_routing: Routing;
	@prop_serializer("SourceConverter")
	doc: any;
	per_field_analyzer: Map<Field, string>;
}
