class ModelSnapshot {
	job_id: string;
	@prop_serializer("EpochMillisecondsDateTimeJsonConverter")
	timestamp: Date;
	description: string;
	snapshot_id: string;
	snapshot_doc_count: long;
	model_size_stats: ModelSizeStats;
	@prop_serializer("EpochMillisecondsDateTimeJsonConverter")
	latest_record_time_stamp: Date;
	@prop_serializer("EpochMillisecondsDateTimeJsonConverter")
	latest_result_time_stamp: Date;
	retain: boolean;
}
