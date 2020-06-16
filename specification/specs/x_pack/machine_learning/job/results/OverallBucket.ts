class OverallBucket {
	bucket_span: long;
	is_interim: boolean;
	jobs: OverallBucketJobInfo[];
	overall_score: double;
	result_type: string;
	@prop_serializer("DateTimeOffsetEpochMillisecondsFormatter")
	timestamp: Date;
}
