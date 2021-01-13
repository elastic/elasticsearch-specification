@rest_spec_name("cat.transforms")
class CatTransformsRequest extends CatRequestBase {
  query_parameters?: {
    allow_no_match?: boolean;
    from?: integer;
    size?: integer;
  }
  body?: {
  }
}
