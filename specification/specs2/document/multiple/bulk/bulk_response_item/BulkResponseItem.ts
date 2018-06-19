@class_serializer("BulkResponseItemJsonConverter")
class BulkResponseItem {
	operation: string;
	_index: string;
	_type: string;
	_id: string;
	_version: long;
	status: integer;
	error: BulkError;
	_shards: ShardStatistics;
	_seq_no: long;
	_primary_term: long;
	is_valid: boolean;
}
