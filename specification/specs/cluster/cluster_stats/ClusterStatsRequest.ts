@rest_spec_name("cluster.stats")
class ClusterStatsRequest extends RequestBase {
  pathParts?: {
    node_id?: string | string[];
  }
  query_parameters?: {
    flat_settings?: boolean;
    timeout?: Time;
  }
  body?: {
  }
}
