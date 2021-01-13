@rest_spec_name("cat.fielddata")
class CatFielddataRequest extends CatRequestBase {
  pathParts?: {
    fields?: string | string[];
  }
  query_parameters?: {
    bytes?: Bytes;
  }
  body?: {
  }
}
