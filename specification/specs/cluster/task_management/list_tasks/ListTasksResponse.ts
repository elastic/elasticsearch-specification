class ListTasksResponse extends ResponseBase {
	is_valid: boolean;
	nodes: Dictionary<string, TaskExecutingNode>;
	node_failures: ErrorCause[];
}
