@rest_spec_name('cat.allocation')
class CatAllocationRequest extends CatRequestBase {
  path_parts?: {
    node_id?: NodeIds
  }
  query_parameters?: {
    bytes?: Bytes
  }
  body?: {}
}
