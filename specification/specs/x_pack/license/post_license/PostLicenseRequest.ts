@rest_spec_name("license.post")
class PostLicenseRequest extends RequestBase {
  query_parameters?: {
    acknowledge?: boolean;
  }
  body?: {
    license?: License;
  }
}
