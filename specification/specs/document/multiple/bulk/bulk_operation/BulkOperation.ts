class BulkOperation {
	_id: Id;
	_index: IndexName;
	operation: string;
	retry_on_conflict: integer;
	routing: Routing;
	version: long;
	version_type: VersionType;
}
