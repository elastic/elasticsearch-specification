@rest_spec_name("ml.get_filters")
class GetFiltersRequest extends RequestBase {
  pathParts?: {
    filter_id?: string;
  }
  query_parameters?: {
    from?: integer;
    size?: integer;
  }
  body?: {
  }
}
