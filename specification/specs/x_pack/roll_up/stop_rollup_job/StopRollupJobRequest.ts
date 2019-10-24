@rest_spec_name("rollup.stop_job")
class StopRollupJobRequest extends RequestBase {
	@request_parameter()
	timeout: Time;
	@request_parameter()
	wait_for_completion: boolean;
}
