class ModelSnapshot {
	description: string;
	job_id: string;
	@prop_serializer("NullableDateTimeOffsetEpochMillisecondsFormatter")
	latest_record_time_stamp: Date;
	@prop_serializer("NullableDateTimeOffsetEpochMillisecondsFormatter")
	latest_result_time_stamp: Date;
	model_size_stats: ModelSizeStats;
	retain: boolean;
	snapshot_doc_count: long;
	snapshot_id: string;
	@prop_serializer("DateTimeOffsetEpochMillisecondsFormatter")
	timestamp: Date;
}
