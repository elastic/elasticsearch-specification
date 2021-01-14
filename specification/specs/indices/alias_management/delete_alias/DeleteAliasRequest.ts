@rest_spec_name("indices.delete_alias")
class DeleteAliasRequest extends RequestBase {
  path_parts?: {
    index: string | string[];
    name: string | string[];
  }
  query_parameters?: {
    master_timeout?: Time;
    timeout?: Time;
  }
  body?: {
  }
}
