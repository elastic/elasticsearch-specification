@rest_spec_name("ml.get_job_stats")
class GetJobStatsRequest extends RequestBase {
	@request_parameter()
	allow_no_jobs: boolean;
}
