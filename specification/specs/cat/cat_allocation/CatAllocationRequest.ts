@rest_spec_name("cat.allocation")
class CatAllocationRequest extends CatRequestBase {
  pathParts?: {
    node_id?: string | string[];
  }
  query_parameters?: {
    bytes?: Bytes;
  }
  body?: {
  }
}
