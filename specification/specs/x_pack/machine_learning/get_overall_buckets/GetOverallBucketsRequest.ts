@rest_spec_name("ml.get_overall_buckets")
class GetOverallBucketsRequest extends RequestBase {
	allow_no_jobs: boolean;
	bucket_span: Time;
	end: Date;
	exclude_interim: boolean;
	overall_score: double;
	start: Date;
	top_n: integer;
}
