
/**namespace:Document.Multiple.Bulk.BulkResponseItem */
/**custom_serialization*/
interface BulkResponseItemBase {
	Operation: string;
	_index: string;
	_type: string;
	_id: string;
	_version: long;
	status: integer;
	error: BulkError;
	_shards: ShardsMetaData;
	IsValid: boolean;
}