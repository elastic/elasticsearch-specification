class IndexStats {
	docs: DocStats;
	store: StoreStats;
	indexing: IndexingStats;
	get: GetStats;
	search: SearchStats;
	merges: MergesStats;
	refresh: RefreshStats;
	flush: FlushStats;
	warmer: WarmerStats;
	query_cache: QueryCacheStats;
	fielddata: FielddataStats;
	completion: CompletionStats;
	segments: SegmentsStats;
	translog: TranslogStats;
	request_cache: RequestCacheStats;
	recovery: RecoveryStats;
}
