@rest_spec_name("indices.recovery")
class RecoveryStatusRequest extends RequestBase {
  path_parts?: {
    index?: string | string[];
  }
  query_parameters?: {
    active_only?: boolean;
    detailed?: boolean;
  }
  body?: {
  }
}
