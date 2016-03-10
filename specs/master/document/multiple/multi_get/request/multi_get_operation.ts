
/**namespace:Document.Multiple.MultiGet.Request */
/**custom_serialization*/
interface MultiGetOperation {
	_index: IndexName;
	_type: TypeName;
	_id: Id;
	fields: Field[];
	_routing: string;
	_source: Union<boolean, SourceFilter>;
	CanBeFlattened: boolean;
}