@rest_spec_name('tasks.list')
class ListTasksRequest extends RequestBase {
  query_parameters?: {
    actions?: string[]
    detailed?: boolean
    group_by?: GroupBy
    nodes?: string[]
    parent_task_id?: string
    timeout?: Time
    wait_for_completion?: boolean
  }
  body?: {}
}
