class MultiGetHit<TDocument> {
	source: TDocument;
	index: string;
	found: boolean;
	type: string;
	version: long;
	id: string;
	parent: string;
	routing: string;
	error: MainError;
}
