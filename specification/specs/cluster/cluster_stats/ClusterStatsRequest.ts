@rest_spec_name("cluster.stats")
class ClusterStatsRequest extends RequestBase {
  path_parts?: {
    node_id?: NodeIds;
  }
  query_parameters?: {
    flat_settings?: boolean;
    timeout?: Time;
  }
  body?: {
  }
}
