
/**namespace:QueryDsl.Specialized.MoreLikeThis.Like */
/**custom_serialization*/
interface like_document {
	_index: index_name;
	_type: type_name;
	_id: id;
	fields: field[];
	_routing: string;
	doc: any;
	per_field_analyzer: map<field, string>[];
	CanBeFlattened: boolean;
}