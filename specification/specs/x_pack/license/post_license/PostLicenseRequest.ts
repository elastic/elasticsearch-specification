@rest_spec_name("license.post")
class PostLicenseRequest extends RequestBase {
	@request_parameter()
	acknowledge: boolean;
	license: License;
}
