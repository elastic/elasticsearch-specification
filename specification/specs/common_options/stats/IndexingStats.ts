class IndexingStats {
	index_current: long;
	delete_current: long;
	delete_time: string;
	delete_time_in_millis: long;
	delete_total: long;
	is_throttled: boolean;
	noop_update_total: long;
	throttle_time: string;
	throttle_time_in_millis: long;
	index_time: string;
	index_time_in_millis: long;
	index_total: long;
	@prop_serializer("VerbatimInterfaceReadOnlyDictionaryKeysFormatter`2")
	types: Dictionary<string, IndexingStats>;
}
