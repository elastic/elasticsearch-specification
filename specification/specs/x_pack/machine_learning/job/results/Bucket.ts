class Bucket {
	anomaly_score: double;
	bucket_influencers: BucketInfluencer[];
	bucket_span: Time;
	event_count: long;
	initial_anomaly_score: double;
	is_interim: boolean;
	job_id: string;
	partition_scores: PartitionScore[];
	processing_time_milliseconds: double;
	result_type: string;
	timestamp: Date;
}
