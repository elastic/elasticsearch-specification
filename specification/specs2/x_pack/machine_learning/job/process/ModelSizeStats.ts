class ModelSizeStats {
	job_id: string;
	result_type: string;
	model_bytes: long;
	total_by_field_count: long;
	total_over_field_count: long;
	total_partition_field_count: long;
	bucket_allocation_failures_count: long;
	memory_status: MemoryStatus;
	@prop_serializer("EpochMillisecondsDateTimeJsonConverter")
	log_time: Date;
	@prop_serializer("EpochMillisecondsDateTimeJsonConverter")
	timestamp: Date;
}
