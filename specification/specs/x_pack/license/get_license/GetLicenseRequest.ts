@rest_spec_name("license.get")
class GetLicenseRequest extends RequestBase {
  query_parameters: {
    accept_enterprise: boolean;
    local: boolean;
  }
  body: {
  }
}
