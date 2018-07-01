@rest_spec_name("xpack.license.post")
class PostLicenseRequest extends RequestBase {
	license: License;
	@request_parameter()
	acknowledge: boolean;
}
