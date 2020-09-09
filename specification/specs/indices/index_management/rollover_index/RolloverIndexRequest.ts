@rest_spec_name("indices.rollover")
class RolloverIndexRequest extends RequestBase {
  query_parameters: {
    dry_run: boolean;
    include_type_name: boolean;
    master_timeout: Time;
    timeout: Time;
    wait_for_active_shards: string;
  }
  body: {
    aliases: Dictionary<IndexName, Alias>;
    conditions: RolloverConditions;
    mappings: TypeMapping;
    settings: Dictionary<string, any>;
  }
}
