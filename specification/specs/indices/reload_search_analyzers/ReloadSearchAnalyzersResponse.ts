class ReloadSearchAnalyzersResponse extends ResponseBase implements IResponse {
	reload_details: ReloadDetails[];
	_shards: ShardStatistics;
}
