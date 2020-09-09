@rest_spec_name("cluster.allocation_explain")
class ClusterAllocationExplainRequest extends RequestBase {
  query_parameters: {
    include_disk_info: boolean;
    include_yes_decisions: boolean;
  }
  body: {
    index: IndexName;
    primary: boolean;
    shard: integer;
  }
}
