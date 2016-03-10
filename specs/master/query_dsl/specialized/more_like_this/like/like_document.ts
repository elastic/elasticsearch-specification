
/**namespace:QueryDsl.Specialized.MoreLikeThis.Like */
/**custom_serialization*/
interface LikeDocument {
	_index: IndexName;
	_type: TypeName;
	_id: Id;
	fields: Field[];
	_routing: string;
	doc: any;
	per_field_analyzer: Map<Field, string>;
	CanBeFlattened: boolean;
}