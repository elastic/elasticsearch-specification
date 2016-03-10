
/**namespace:Document.Multiple.MultiTermVectors */
interface MultiTermVectorOperation {
	_index: IndexName;
	_type: TypeName;
	_id: Id;
	doc: any;
	fields: Field[];
	offsets: boolean;
	payloads: boolean;
	positions: boolean;
	term_statistics: boolean;
	field_statistics: boolean;
}