
/**namespace:Indices.Monitoring.IndicesStats */
interface IndexStats {
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
	percolate: PercolateStats;
	completion: CompletionStats;
	segments: SegmentsStats;
	translog: TranslogStats;
	suggest: SuggestStats;
	request_cache: RequestCacheStats;
	recovery: RecoveryStats;
}