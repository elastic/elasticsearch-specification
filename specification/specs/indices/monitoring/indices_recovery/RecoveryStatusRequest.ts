@rest_spec_name('indices.recovery')
class RecoveryStatusRequest extends RequestBase {
  path_parts?: {
    index?: Indices
  }
  query_parameters?: {
    active_only?: boolean
    detailed?: boolean
  }
  body?: {}
}
