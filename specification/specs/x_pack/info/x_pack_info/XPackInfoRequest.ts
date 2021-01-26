@rest_spec_name('xpack.info')
class XPackInfoRequest extends RequestBase {
  query_parameters?: {
    categories?: string[]
  }
  body?: {}
}
