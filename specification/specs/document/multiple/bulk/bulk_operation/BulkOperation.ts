class BulkOperation {
	id: Id;
	index: IndexName;
	operation: string;
	retries_on_conflict: integer;
	routing: Routing;
	version: long;
	version_type: VersionType;
}
