@rest_spec_name("cat.fielddata")
class CatFielddataRequest extends CatRequestBase {
  path_parts?: {
    fields?: Fields;
  }
  query_parameters?: {
    bytes?: Bytes;
  }
  body?: {
  }
}
