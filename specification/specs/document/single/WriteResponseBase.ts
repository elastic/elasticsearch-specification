class WriteResponseBase extends ResponseBase implements IResponse {
	id: string;
	index: string;
	primary_term: long;
	result: Result;
	sequence_number: long;
	shards: ShardStatistics;
	type: string;
	version: long;
}
