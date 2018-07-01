class TaskStatus {
	total: long;
	updated: long;
	created: long;
	deleted: long;
	batches: long;
	version_conflicts: long;
	noops: long;
	retries: TaskRetries;
	throttled_millis: long;
	requests_per_second: long;
	throttled_until_millis: long;
}
