@rest_spec_name("indices.recovery")
class RecoveryStatusRequest extends RequestBase {
  pathParts?: {
    index?: string | string[];
  }
  query_parameters?: {
    active_only?: boolean;
    detailed?: boolean;
  }
  body?: {
  }
}
