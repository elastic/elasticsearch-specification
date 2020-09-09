@rest_spec_name("nodes.stats")
class NodesStatsRequest extends RequestBase {
  query_parameters: {
    completion_fields: Field[];
    fielddata_fields: Field[];
    fields: Field[];
    groups: boolean;
    include_segment_file_sizes: boolean;
    level: Level;
    timeout: Time;
    types: string[];
  }
  body: {
  }
}
