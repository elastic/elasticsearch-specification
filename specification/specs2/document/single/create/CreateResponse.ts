class CreateResponse extends ResponseBase {
	_index: string;
	_type: string;
	_id: string;
	_version: long;
	result: Result;
	_shards: ShardStatistics;
	_seq_no: long;
	_primary_term: long;
}
