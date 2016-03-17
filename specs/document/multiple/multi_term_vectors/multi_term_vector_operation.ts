
/**namespace:Document.Multiple.MultiTermVectors */
interface multi_term_vector_operation {
	_index: index_name;
	_type: type_name;
	_id: id;
	doc: any;
	fields: field[];
	offsets: boolean;
	payloads: boolean;
	positions: boolean;
	term_statistics: boolean;
	field_statistics: boolean;
}