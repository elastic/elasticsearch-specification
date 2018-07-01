class ReindexOnServerResponse extends ResponseBase {
	is_valid: boolean;
	took: Time;
	task: TaskId;
	timed_out: boolean;
	total: long;
	created: long;
	updated: long;
	batches: long;
	version_conflicts: long;
	noops: long;
	retries: Retries;
	failures: BulkIndexByScrollFailure[];
}
