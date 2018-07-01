@rest_spec_name("xpack.license.get")
class GetLicenseRequest extends RequestBase {
	@request_parameter()
	local: boolean;
}
