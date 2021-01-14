@rest_spec_name("indices.put_alias")
class PutAliasRequest extends RequestBase {
  path_parts?: {
    index: string | string[];
    name: string;
  }
  query_parameters?: {
    master_timeout?: Time;
    timeout?: Time;
  }
  body?: {
    filter?: QueryContainer;
    index_routing?: Routing;
    is_write_index?: boolean;
    routing?: Routing;
    search_routing?: Routing;
  }
}
