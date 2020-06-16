class BucketInfluencer {
	bucket_span: long;
	influencer_field_name: string;
	influencer_field_value: string;
	influencer_score: double;
	initial_influencer_score: double;
	is_interim: boolean;
	job_id: string;
	probability: double;
	result_type: string;
	@prop_serializer("DateTimeOffsetEpochMillisecondsFormatter")
	timestamp: Date;
}
