@rest_spec_name("indices.create")
class CreateIndexRequest extends RequestBase {
  query_parameters: {
    include_type_name: boolean;
    master_timeout: Time;
    timeout: Time;
    wait_for_active_shards: string;
  }
  body: {
    aliases: Dictionary<IndexName, Alias>;
    mappings: TypeMapping;
    settings: Dictionary<string, any>;
  }
}
