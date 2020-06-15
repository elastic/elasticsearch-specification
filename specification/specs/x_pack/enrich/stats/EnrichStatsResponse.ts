class EnrichStatsResponse extends ResponseBase implements IResponse {
	executing_policies: ExecutingPolicy[];
	coordinator_stats: CoordinatorStats[];
}
