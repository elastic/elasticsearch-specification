class IndexStats {
	completion: CompletionStats;
	docs: DocStats;
	fielddata: FielddataStats;
	flush: FlushStats;
	get: GetStats;
	indexing: IndexingStats;
	merges: MergesStats;
	query_cache: QueryCacheStats;
	recovery: RecoveryStats;
	refresh: RefreshStats;
	request_cache: RequestCacheStats;
	search: SearchStats;
	segments: SegmentsStats;
	store: StoreStats;
	translog: TranslogStats;
	warmer: WarmerStats;
}
