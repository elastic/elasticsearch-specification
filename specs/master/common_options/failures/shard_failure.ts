
/**namespace:CommonOptions.Failures */
interface ShardFailure {
	index: string;
	shard: integer;
	node: string;
	reason: ShardFailureReason;
}