@rest_spec_name("indices.delete_alias")
class DeleteAliasRequest extends RequestBase {
  path_parts?: {
    index: Indices;
    name: Names;
  }
  query_parameters?: {
    master_timeout?: Time;
    timeout?: Time;
  }
  body?: {
  }
}
