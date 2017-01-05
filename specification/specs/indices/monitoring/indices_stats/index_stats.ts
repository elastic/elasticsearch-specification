
/**namespace:Indices.Monitoring.IndicesStats */
interface index_stats {
	docs: doc_stats;
	store: store_stats;
	indexing: indexing_stats;
	get: get_stats;
	search: search_stats;
	merges: merges_stats;
	refresh: refresh_stats;
	flush: flush_stats;
	warmer: warmer_stats;
	query_cache: query_cache_stats;
	fielddata: fielddata_stats;
	percolate: percolate_stats;
	completion: completion_stats;
	segments: segments_stats;
	translog: translog_stats;
	suggest: suggest_stats;
	request_cache: request_cache_stats;
	recovery: recovery_stats;
}