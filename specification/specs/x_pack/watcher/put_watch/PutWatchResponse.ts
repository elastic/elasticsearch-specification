class PutWatchResponse extends ResponseBase implements IResponse {
	created: boolean;
	id: string;
	version: integer;
	sequence_number: long;
	primary_term: long;
}
