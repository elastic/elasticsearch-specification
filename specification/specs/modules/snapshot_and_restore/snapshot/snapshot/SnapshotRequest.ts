@rest_spec_name("snapshot.create")
class SnapshotRequest extends RequestBase {
  query_parameters?: {
    master_timeout?: Time;
    wait_for_completion?: boolean;
  }
  body?: {
    ignore_unavailable?: boolean;
    include_global_state?: boolean;
    /** @prop_serializer IndicesMultiSyntaxFormatter */
    indices?: Indices;
    metadata?: Dictionary<string, any>;
    partial?: boolean;
  }
}
