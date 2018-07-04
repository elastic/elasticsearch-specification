class MainError extends ErrorCause {
	root_cause: ErrorCause[];
	headers: Dictionary<string, string>;
}
