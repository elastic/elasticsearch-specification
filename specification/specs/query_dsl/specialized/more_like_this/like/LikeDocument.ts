class LikeDocument {
	@prop_serializer("SourceFormatter`1")
	doc: any;
	fields: Field[];
	_id: Id;
	_index: IndexName;
	per_field_analyzer: Dictionary<Field, string>;
	routing: Routing;
}
