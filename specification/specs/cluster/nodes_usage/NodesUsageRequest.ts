@rest_spec_name("nodes.usage")
class NodesUsageRequest extends RequestBase {
  pathParts?: {
    node_id?: string | string[];
    metric?: string | string[];
  }
  query_parameters?: {
    timeout?: Time;
  }
  body?: {
  }
}
