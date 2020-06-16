class ListTasksResponse extends ResponseBase implements IResponse {
	node_failures: ErrorCause[];
	nodes: Dictionary<string, TaskExecutingNode>;
}
