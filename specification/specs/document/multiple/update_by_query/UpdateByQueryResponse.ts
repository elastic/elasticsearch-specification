class UpdateByQueryResponse extends ResponseBase {
	is_valid: boolean;
	took: long;
	task: TaskId;
	timed_out: boolean;
	total: long;
	updated: long;
	batches: long;
	version_conflicts: long;
	noops: long;
	retries: Retries;
	failures: BulkIndexByScrollFailure[];
	requests_per_second: float;
}
