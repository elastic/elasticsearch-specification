class ErrorCause {
	reason: string;
	type: string;
	caused_by: ErrorCause;
	stack_trace: string;
	metadata: ErrorCauseMetadata;
}
