@rest_spec_name('cat.tasks')
class CatTasksRequest extends CatRequestBase {
  query_parameters?: {
    actions?: string[]
    detailed?: boolean
    node_id?: string[]
    parent_task?: long
  }
  body?: {}
}
