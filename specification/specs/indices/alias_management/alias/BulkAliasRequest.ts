@rest_spec_name("indices.update_aliases")
class BulkAliasRequest extends RequestBase {
  query_parameters: {
    master_timeout: Time;
    timeout: Time;
  }
  body: {
    actions: AliasAction[];
  }
}
