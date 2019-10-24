class CancelTasksResponse extends ResponseBase implements IResponse {
	is_valid: boolean;
	node_failures: ErrorCause[];
	nodes: Dictionary<string, TaskExecutingNode>;
}
