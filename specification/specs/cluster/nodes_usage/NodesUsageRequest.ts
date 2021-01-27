@rest_spec_name('nodes.usage')
class NodesUsageRequest extends RequestBase {
  path_parts?: {
    node_id?: NodeIds
    metric?: Metrics
  }
  query_parameters?: {
    timeout?: Time
  }
  body?: {}
}
