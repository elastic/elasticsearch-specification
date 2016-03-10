
/**namespace:Document.Multiple.Bulk.BulkOperation */
interface BulkOperation {
	Operation: string;
	_index: IndexName;
	_type: TypeName;
	_id: Id;
	_version: long;
	/**custom_serialization */
	_version_type: VersionType;
	_routing: string;
	_parent: Id;
	_timestamp: long;
	_ttl: Time;
	_retry_on_conflict: integer;
}