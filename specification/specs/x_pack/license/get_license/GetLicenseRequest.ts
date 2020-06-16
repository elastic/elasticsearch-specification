@rest_spec_name("license.get")
class GetLicenseRequest extends RequestBase {
	@request_parameter()
	accept_enterprise: boolean;
	@request_parameter()
	local: boolean;
}
