@rest_spec_name("cat.shards")
class CatShardsRequest extends CatRequestBase {
  path_parts?: {
    index?: Indices;
  }
  query_parameters?: {
    bytes?: Bytes;
  }
  body?: {
  }
}
