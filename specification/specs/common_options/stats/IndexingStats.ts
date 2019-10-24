class IndexingStats {
	current: long;
	delete_current: long;
	delete_time: string;
	delete_time_in_milliseconds: long;
	delete_total: long;
	is_throttled: boolean;
	noop_update_total: long;
	throttle_time: string;
	throttle_time_in_milliseconds: long;
	time: string;
	time_in_milliseconds: long;
	total: long;
	types: Dictionary<string, IndexingStats>;
}
