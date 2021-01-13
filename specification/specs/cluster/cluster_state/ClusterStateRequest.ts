@rest_spec_name("cluster.state")
class ClusterStateRequest extends RequestBase {
  pathParts?: {
    metric?: string | string[];
    index?: string | string[];
  }
  query_parameters?: {
    allow_no_indices?: boolean;
    expand_wildcards?: ExpandWildcards;
    flat_settings?: boolean;
    ignore_unavailable?: boolean;
    local?: boolean;
    master_timeout?: Time;
    wait_for_metadata_version?: long;
    wait_for_timeout?: Time;
  }
  body?: {
  }
}
