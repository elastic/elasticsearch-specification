class PostLicenseRequest extends RequestBase {
	license: License;
	@request_parameter()
	acknowledge: boolean;
}
