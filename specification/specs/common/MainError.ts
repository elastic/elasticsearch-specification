class MainError extends ErrorCause {
	root_cause: ErrorCause[];
	headers: Map<string, string>;
}
