class PostJobDataResponse extends ResponseBase {
	job_id: string;
	processed_record_count: long;
	processed_field_count: long;
	input_bytes: long;
	input_field_count: long;
	invalid_date_count: long;
	missing_field_count: long;
	out_of_order_timestamp_count: long;
	empty_bucket_count: long;
	sparse_bucket_count: long;
	bucket_count: long;
	@prop_serializer("EpochMillisecondsDateTimeJsonConverter")
	last_data_time: Date;
	input_record_count: long;
}
