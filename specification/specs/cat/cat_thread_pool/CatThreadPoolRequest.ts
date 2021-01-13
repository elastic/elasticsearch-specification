@rest_spec_name("cat.thread_pool")
class CatThreadPoolRequest extends CatRequestBase {
  pathParts?: {
    thread_pool_patterns?: string | string[];
  }
  query_parameters?: {
    size?: Size;
  }
  body?: {
  }
}
