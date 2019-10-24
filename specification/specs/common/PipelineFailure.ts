enum PipelineFailure {
	BadAuthentication = 0,
	BadResponse = 1,
	PingFailure = 2,
	SniffFailure = 3,
	CouldNotStartSniffOnStartup = 4,
	MaxTimeoutReached = 5,
	MaxRetriesReached = 6,
	Unexpected = 7,
	BadRequest = 8,
	NoNodesAttempted = 9
}
