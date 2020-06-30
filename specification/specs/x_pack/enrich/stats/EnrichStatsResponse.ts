class EnrichStatsResponse extends ResponseBase implements IResponse {
	coordinator_stats: CoordinatorStats[];
	executing_policies: ExecutingPolicy[];
}
