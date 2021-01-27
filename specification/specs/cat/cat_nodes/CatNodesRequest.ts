@rest_spec_name('cat.nodes')
class CatNodesRequest extends CatRequestBase {
  query_parameters?: {
    bytes?: Bytes
    full_id?: boolean
  }
  body?: {}
}
