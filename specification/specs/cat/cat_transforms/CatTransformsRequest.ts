@rest_spec_name('cat.transforms')
class CatTransformsRequest extends CatRequestBase {
  path_parts?: {
    transform_id?: Id
  }
  query_parameters?: {
    allow_no_match?: boolean
    from?: integer
    size?: integer
  }
  body?: {}
}
