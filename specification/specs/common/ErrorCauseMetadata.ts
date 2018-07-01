class ErrorCauseMetadata {
	licensed_expired_feature: string;
	index: string;
	index_u_u_i_d: string;
	resource_type: string;
	resource_id: string[];
	shard: integer;
	failed_shards: ShardFailure[];
	line: integer;
	column: integer;
	bytes_wanted: long;
	bytes_limit: long;
	phase: string;
	grouped: boolean;
	script_stack: string[];
	script: string;
	language: string;
}
