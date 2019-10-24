@rest_spec_name("license.post_start_trial")
class StartTrialLicenseRequest extends RequestBase {
	@request_parameter()
	acknowledge: boolean;
	@request_parameter()
	type_query_string: string;
}
