class GetResponse<TDocument> extends ResponseBase {
	fields: Dictionary<string, LazyDocument>;
	found: boolean;
	id: string;
	index: string;
	primary_term: long;
	routing: string;
	sequence_number: long;
	source: TDocument;
	type: string;
	version: long;
}
