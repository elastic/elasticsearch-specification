@rest_spec_name("cat.recovery")
class CatRecoveryRequest extends CatRequestBase {
  pathParts?: {
    index?: string | string[];
  }
  query_parameters?: {
    active_only?: boolean;
    bytes?: Bytes;
    detailed?: boolean;
  }
  body?: {
  }
}
