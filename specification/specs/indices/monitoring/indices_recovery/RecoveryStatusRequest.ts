@rest_spec_name("indices.recovery")
class RecoveryStatusRequest extends RequestBase {
  query_parameters?: {
    active_only?: boolean;
    detailed?: boolean;
  }
  body?: {
  }
}
