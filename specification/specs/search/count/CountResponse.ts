class CountResponse extends ResponseBase implements IResponse {
	count: long;
	shards: ShardStatistics;
}
