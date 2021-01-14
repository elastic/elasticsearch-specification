@rest_spec_name("rollup.stop_job")
class StopRollupJobRequest extends RequestBase {
  path_parts?: {
    id: string;
  }
  query_parameters?: {
    timeout?: Time;
    wait_for_completion?: boolean;
  }
  body?: {
  }
}
