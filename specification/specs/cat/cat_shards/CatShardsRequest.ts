@rest_spec_name("cat.shards")
class CatShardsRequest extends CatRequestBase {
  path_parts?: {
    index?: string | string[];
  }
  query_parameters?: {
    bytes?: Bytes;
  }
  body?: {
  }
}
