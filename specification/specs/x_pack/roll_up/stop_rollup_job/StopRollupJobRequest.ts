@rest_spec_name("rollup.stop_job")
class StopRollupJobRequest extends RequestBase {
  query_parameters?: {
    timeout?: Time;
    wait_for_completion?: boolean;
  }
  body?: {
  }
}
