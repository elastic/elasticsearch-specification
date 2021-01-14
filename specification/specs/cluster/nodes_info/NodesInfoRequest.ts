@rest_spec_name("nodes.info")
class NodesInfoRequest extends RequestBase {
  path_parts?: {
    node_id?: string | string[];
    metric?: string | string[];
  }
  query_parameters?: {
    flat_settings?: boolean;
    timeout?: Time;
  }
  body?: {
  }
}
