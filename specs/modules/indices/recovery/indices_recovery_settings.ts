
/**namespace:Modules.Indices.Recovery */
interface indices_recovery_settings {
	ConcurrentStreams: integer;
	ConcurrentSmallFileStreams: integer;
	FileChunkSize: string;
	TranslogOperations: integer;
	TranslogSize: string;
	Compress: boolean;
	MaxBytesPerSecond: string;
}