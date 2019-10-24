class ReindexStatus {
	batches: long;
	created: long;
	deleted: long;
	noops: long;
	requests_per_second: float;
	retries: Retries;
	throttled_in_milliseconds: long;
	throttled_until_in_milliseconds: long;
	total: long;
	updated: long;
	version_conflicts: long;
}
