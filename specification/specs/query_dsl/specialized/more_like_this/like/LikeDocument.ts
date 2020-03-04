class LikeDocument {
	doc: any;
	fields: Field[];
	_id: Id;
	_index: IndexName;
	per_field_analyzer: Dictionary<Field, string>;
	routing: Routing;
}
