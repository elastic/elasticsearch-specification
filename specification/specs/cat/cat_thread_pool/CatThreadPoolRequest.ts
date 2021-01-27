@rest_spec_name('cat.thread_pool')
class CatThreadPoolRequest extends CatRequestBase {
  path_parts?: {
    thread_pool_patterns?: Names
  }
  query_parameters?: {
    size?: Size
  }
  body?: {}
}
