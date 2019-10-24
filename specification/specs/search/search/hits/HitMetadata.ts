class HitMetadata<TDocument> {
	id: string;
	index: string;
	primary_term: long;
	routing: string;
	sequence_number: long;
	source: TDocument;
	type: string;
	version: long;
}
