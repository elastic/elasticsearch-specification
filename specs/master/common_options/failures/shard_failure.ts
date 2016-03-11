
/**namespace:CommonOptions.Failures */
interface shard_failure {
	index: string;
	shard: integer;
	node: string;
	reason: shard_failure_reason;
}