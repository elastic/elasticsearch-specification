class BulkIndexFailureCause extends Error {
	index_unique_id: string;
	shard: integer;
	index: string;
}
