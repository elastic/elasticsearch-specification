class CountResponse extends ResponseBase implements IResponse {
	count: long;
	_shards: ShardStatistics;
}
