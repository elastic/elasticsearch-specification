
/**namespace:Document.Multiple.Bulk.BulkOperation */
interface bulk_operation {
	Operation: string;
	_index: index_name;
	_type: type_name;
	_id: id;
	_version: long;
	/**custom_serialization */
	_version_type: VersionType;
	_routing: string;
	_parent: id;
	_timestamp: long;
	_ttl: time;
	_retry_on_conflict: integer;
}