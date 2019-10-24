class MultiGetHit<TDocument> {
	error: MainError;
	found: boolean;
	id: string;
	index: string;
	routing: string;
	source: TDocument;
	type: string;
	version: long;
	sequence_number: long;
	primary_term: long;
}
