class BulkResponseItemBase {
	error: MainError;
	id: string;
	index: string;
	operation: string;
	primary_term: long;
	result: string;
	sequence_number: long;
	shards: ShardStatistics;
	status: integer;
	type: string;
	version: long;
	is_valid: boolean;
}
