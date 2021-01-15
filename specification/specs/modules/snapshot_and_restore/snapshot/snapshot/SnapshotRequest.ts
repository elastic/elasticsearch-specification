@rest_spec_name("snapshot.create")
class SnapshotRequest extends RequestBase {
  path_parts?: {
    repository: Name;
    snapshot: Name;
  }
  query_parameters?: {
    master_timeout?: Time;
    wait_for_completion?: boolean;
  }
  body?: {
    ignore_unavailable?: boolean;
    include_global_state?: boolean;
    /** @prop_serializer IndicesMultiSyntaxFormatter */
    indices?: Indices;
    metadata?: Dictionary<string, UserDefinedValue>;
    partial?: boolean;
  }
}
