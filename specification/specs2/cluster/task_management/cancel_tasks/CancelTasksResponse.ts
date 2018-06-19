class CancelTasksResponse extends ResponseBase {
	is_valid: boolean;
	nodes: Map<string, TaskExecutingNode>;
	node_failures: ErrorCause[];
}
