@rest_spec_name("tasks.get")
class GetTaskRequest extends RequestBase {
  path_parts?: {
    task_id: string;
  }
  query_parameters?: {
    timeout?: Time;
    wait_for_completion?: boolean;
  }
  body?: {
  }
}
