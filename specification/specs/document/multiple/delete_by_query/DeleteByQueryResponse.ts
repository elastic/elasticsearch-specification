class DeleteByQueryResponse extends ResponseBase {
	is_valid: boolean;
	took: long;
	task: TaskId;
	timed_out: boolean;
	slice_id: integer;
	deleted: long;
	batches: long;
	version_conflicts: long;
	noops: long;
	retries: Retries;
	throttled_millis: long;
	requests_per_second: float;
	throttled_until_millis: long;
	total: long;
	failures: BulkIndexByScrollFailure[];
}
