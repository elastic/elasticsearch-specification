class ErrorCause {
	additional_properties: Dictionary<string, any>;
	bytes_limit: long;
	bytes_wanted: long;
	caused_by: ErrorCause;
	column: integer;
	failed_shards: ShardFailure[];
	grouped: boolean;
	index: string;
	index_u_u_i_d: string;
	language: string;
	licensed_expired_feature: string;
	line: integer;
	phase: string;
	reason: string;
	resource_id: string[];
	resource_type: string;
	script: string;
	script_stack: string[];
	shard: integer;
	stack_trace: string;
	type: string;
}
