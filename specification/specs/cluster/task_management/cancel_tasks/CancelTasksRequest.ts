@rest_spec_name("tasks.cancel")
class CancelTasksRequest extends RequestBase {
  pathParts?: {
    task_id?: string;
  }
  query_parameters?: {
    actions?: string[];
    nodes?: string[];
    parent_task_id?: string;
  }
  body?: {
  }
}
