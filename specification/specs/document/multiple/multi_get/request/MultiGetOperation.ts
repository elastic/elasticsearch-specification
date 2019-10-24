class MultiGetOperation {
	can_be_flattened: boolean;
	id: Id;
	index: IndexName;
	routing: string;
	source: Union<boolean, SourceFilter>;
	stored_fields: Field[];
	version: long;
	version_type: VersionType;
}
