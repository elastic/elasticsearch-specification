class ReloadSearchAnalyzersResponse extends ResponseBase implements IResponse {
	_shards: ShardStatistics;
	reload_details: ReloadDetails[];
}
