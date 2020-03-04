class GetResponse<TDocument> extends ResponseBase {
	fields: Dictionary<string, LazyDocument>;
	found: boolean;
	_id: string;
	_index: string;
	_primary_term: long;
	_routing: string;
	_seq_no: long;
	_source: TDocument;
	_type: string;
	_version: long;
}
