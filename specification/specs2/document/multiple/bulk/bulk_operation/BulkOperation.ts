class BulkOperation {
	operation: string;
	_index: IndexName;
	_type: TypeName;
	_id: Id;
	version: long;
	version_type: VersionType;
	routing: Routing;
	parent: Id;
	retry_on_conflict: integer;
}
