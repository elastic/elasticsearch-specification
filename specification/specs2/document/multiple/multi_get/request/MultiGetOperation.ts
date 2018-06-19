class MultiGetOperation {
	_index: IndexName;
	_type: TypeName;
	_id: Id;
	stored_fields: Field[];
	routing: string;
	_source: Union<boolean, SourceFilter>;
	version: long;
	version_type: VersionType;
	can_be_flattened: boolean;
}
