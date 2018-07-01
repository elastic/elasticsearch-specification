class ReindexStatus {
	total: long;
	updated: long;
	created: long;
	deleted: long;
	batches: long;
	version_conflicts: long;
	noops: long;
	retries: Retries;
	throttled_millis: long;
	requests_per_second: float;
	throttled_until_millis: long;
}
