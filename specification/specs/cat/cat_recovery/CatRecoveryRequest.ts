@rest_spec_name("cat.recovery")
class CatRecoveryRequest extends RequestBase {
  query_parameters: {
    active_only: boolean;
    bytes: Bytes;
    detailed: boolean;
    format: string;
    headers: string[];
    help: boolean;
    master_timeout: Time;
    sort_by_columns: string[];
    verbose: boolean;
  }
  body: {
  }
}
