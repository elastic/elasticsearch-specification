@rest_spec_name("cat.shards")
class CatShardsRequest extends CatRequestBase {
  pathParts?: {
    index?: string | string[];
  }
  query_parameters?: {
    bytes?: Bytes;
  }
  body?: {
  }
}
