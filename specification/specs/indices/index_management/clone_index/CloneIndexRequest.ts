/**
 * @type_stability stable
 */
@rest_spec_name("indices.clone")
class CloneIndexRequest extends RequestBase {
  path_parts?: {
    index: IndexName;
    target: Name;
  }
  query_parameters?: {
    master_timeout?: Time;
    timeout?: Time;
    wait_for_active_shards?: string | number;
  }
  body?: {
    aliases?: Dictionary<IndexName, Alias>;
    settings?: Dictionary<string, UserDefinedValue>;
  }
}
