class PutWatchResponse extends ResponseBase implements IResponse {
	created: boolean;
	_id: string;
	_version: integer;
	_seq_no: long;
	_primary_term: long;
}
