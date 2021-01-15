@rest_spec_name("cat.recovery")
class CatRecoveryRequest extends CatRequestBase {
  path_parts?: {
    index?: Indices;
  }
  query_parameters?: {
    active_only?: boolean;
    bytes?: Bytes;
    detailed?: boolean;
  }
  body?: {
  }
}
