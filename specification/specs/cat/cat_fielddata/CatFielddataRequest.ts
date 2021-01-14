@rest_spec_name("cat.fielddata")
class CatFielddataRequest extends CatRequestBase {
  path_parts?: {
    fields?: string | string[];
  }
  query_parameters?: {
    bytes?: Bytes;
  }
  body?: {
  }
}
