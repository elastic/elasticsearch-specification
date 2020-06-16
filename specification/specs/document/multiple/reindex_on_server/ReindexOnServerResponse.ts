class ReindexOnServerResponse extends ResponseBase implements IResponse {
	batches: long;
	created: long;
	failures: BulkIndexByScrollFailure[];
	noops: long;
	retries: Retries;
	slice_id: integer;
	task: TaskId;
	timed_out: boolean;
	took: Time;
	total: long;
	updated: long;
	version_conflicts: long;
}
