@class_serializer("BulkResponseItemFormatter")
class BulkResponseItemBase {
	error: MainError;
	_id: string;
	_index: string;
	operation: string;
	_primary_term: long;
	result: string;
	_seq_no: long;
	_shards: ShardStatistics;
	status: integer;
	_type: string;
	_version: long;
}
