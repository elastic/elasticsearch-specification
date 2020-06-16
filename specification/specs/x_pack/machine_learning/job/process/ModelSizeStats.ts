class ModelSizeStats {
	bucket_allocation_failures_count: long;
	job_id: string;
	@prop_serializer("DateTimeOffsetEpochMillisecondsFormatter")
	log_time: Date;
	memory_status: MemoryStatus;
	model_bytes: long;
	result_type: string;
	@prop_serializer("NullableDateTimeOffsetEpochMillisecondsFormatter")
	timestamp: Date;
	total_by_field_count: long;
	total_over_field_count: long;
	total_partition_field_count: long;
}
