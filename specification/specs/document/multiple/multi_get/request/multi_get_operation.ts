
/**namespace:Document.Multiple.MultiGet.Request */
/**custom_serialization*/
interface multi_get_operation {
	_index: index_name;
	_type: type_name;
	_id: id;
	fields: field[];
	_routing: string;
	_source: union<boolean, source_filter>;
	CanBeFlattened: boolean;
}