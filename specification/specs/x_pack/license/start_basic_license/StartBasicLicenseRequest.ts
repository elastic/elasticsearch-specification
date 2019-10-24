@rest_spec_name("license.post_start_basic")
class StartBasicLicenseRequest extends RequestBase {
	@request_parameter()
	acknowledge: boolean;
}
