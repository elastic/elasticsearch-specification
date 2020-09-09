@rest_spec_name("cluster.reroute")
class ClusterRerouteRequest extends RequestBase {
  query_parameters: {
    dry_run: boolean;
    explain: boolean;
    master_timeout: Time;
    metric: string[];
    retry_failed: boolean;
    timeout: Time;
  }
  body: {
    commands: ClusterRerouteCommand[];
  }
}
