class UpdateResponse<TDocument> extends ResponseBase {
	_shards: ShardStatistics;
	_index: string;
	_type: string;
	_id: string;
	_version: long;
	get: InstantGet<TDocument>;
	result: Result;
}
