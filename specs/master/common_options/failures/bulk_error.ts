
/**namespace:CommonOptions.Failures */
interface BulkError {
	index: string;
	shard: integer;
	type: string;
	reason: string;
}