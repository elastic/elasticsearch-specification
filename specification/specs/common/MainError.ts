class MainError extends ErrorCause {
	headers: Dictionary<string, string>;
	root_cause: ErrorCause[];
}
