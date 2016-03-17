
/**namespace:Document.Multiple.Bulk.BulkResponseItem */
/**custom_serialization*/
interface bulk_response_item_base {
	Operation: string;
	_index: string;
	_type: string;
	_id: string;
	_version: long;
	status: integer;
	error: bulk_error;
	_shards: shards_meta_data;
	IsValid: boolean;
}