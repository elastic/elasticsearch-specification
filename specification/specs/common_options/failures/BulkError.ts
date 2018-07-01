class BulkError extends Error {
	index: string;
	shard: integer;
}
