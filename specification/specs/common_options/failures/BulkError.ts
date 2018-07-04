class TaskId extends String {}
class BulkError extends Error {
	index: string;
	shard: integer;
}
