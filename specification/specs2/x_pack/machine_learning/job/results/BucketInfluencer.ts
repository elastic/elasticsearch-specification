class BucketInfluencer {
	job_id: string;
	result_type: string;
	influencer_field_name: string;
	influencer_field_value: string;
	initial_influencer_score: double;
	influencer_score: double;
	probability: double;
	bucket_span: long;
	is_interim: boolean;
	@prop_serializer("EpochMillisecondsDateTimeJsonConverter")
	timestamp: Date;
}
