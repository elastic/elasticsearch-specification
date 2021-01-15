@rest_spec_name("cluster.health")
class ClusterHealthRequest extends RequestBase {
  path_parts?: {
    index?: Indices;
  }
  query_parameters?: {
    expand_wildcards?: ExpandWildcards;
    level?: Level;
    local?: boolean;
    master_timeout?: Time;
    timeout?: Time;
    wait_for_active_shards?: string;
    wait_for_events?: WaitForEvents;
    wait_for_nodes?: string;
    wait_for_no_initializing_shards?: boolean;
    wait_for_no_relocating_shards?: boolean;
    wait_for_status?: WaitForStatus;
  }
  body?: {
  }
}
