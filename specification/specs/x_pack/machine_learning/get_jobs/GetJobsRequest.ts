@rest_spec_name("ml.get_jobs")
class GetJobsRequest extends RequestBase {
	@request_parameter()
	allow_no_jobs: boolean;
}
