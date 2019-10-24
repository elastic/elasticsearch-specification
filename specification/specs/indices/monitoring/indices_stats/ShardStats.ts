class ShardStats {
	commit: ShardCommit;
	completion: ShardCompletion;
	documents: ShardDocs;
	fielddata: ShardFielddata;
	flush: ShardFlush;
	get: ShardGet;
	indexing: ShardIndexing;
	merges: ShardMerges;
	path: ShardPath;
	query_cache: ShardQueryCache;
	recovery: ShardStatsRecovery;
	refresh: ShardRefresh;
	request_cache: ShardRequestCache;
	routing: ShardRouting;
	search: ShardSearch;
	segments: ShardSegments;
	sequence_number: ShardSequenceNumber;
	store: ShardStatsStore;
	transaction_log: ShardTransactionLog;
	warmer: ShardWarmer;
}
