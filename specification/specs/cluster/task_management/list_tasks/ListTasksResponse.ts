class ListTasksResponse extends ResponseBase {
  node_failures: ErrorCause[];
  nodes: Dictionary<string, TaskExecutingNode>;
}
