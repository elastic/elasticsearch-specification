class DeleteByQueryResponse extends ResponseBase implements IResponse {
	batches: long;
	deleted: long;
	failures: BulkIndexByScrollFailure[];
	noops: long;
	requests_per_second: float;
	retries: Retries;
	slice_id: integer;
	task: TaskId;
	throttled_millis: long;
	throttled_until_millis: long;
	timed_out: boolean;
	took: long;
	total: long;
	version_conflicts: long;
}
