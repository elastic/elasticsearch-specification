@rest_spec_name("cat.tasks")
class CatTasksRequest extends RequestBase {
  query_parameters?: {
    actions?: string[];
    detailed?: boolean;
    format?: string;
    headers?: string[];
    help?: boolean;
    node_id?: string[];
    parent_task?: long;
    sort_by_columns?: string[];
    verbose?: boolean;
  }
  body?: {
  }
}
