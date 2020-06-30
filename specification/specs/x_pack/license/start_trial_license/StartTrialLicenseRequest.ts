@rest_spec_name("license.post_start_trial")
class StartTrialLicenseRequest extends RequestBase {
	query_parameters: {
		acknowledge: boolean;
		type_query_string: string;
	}
	body: {
	}
}
