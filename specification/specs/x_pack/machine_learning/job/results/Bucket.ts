class Bucket {
	job_id: string;
	@prop_serializer("EpochMillisecondsDateTimeJsonConverter")
	timestamp: Date;
	anomaly_score: double;
	bucket_span: Time;
	initial_anomaly_score: double;
	event_count: long;
	is_interim: boolean;
	bucket_influencers: BucketInfluencer[];
	processing_time_ms: double;
	partition_scores: PartitionScore[];
	result_type: string;
}
