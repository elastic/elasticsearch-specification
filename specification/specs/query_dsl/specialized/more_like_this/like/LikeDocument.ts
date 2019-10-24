class LikeDocument {
	document: any;
	fields: Field[];
	id: Id;
	index: IndexName;
	per_field_analyzer: Dictionary<Field, string>;
	routing: Routing;
}
