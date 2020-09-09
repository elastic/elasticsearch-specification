class MultiGetHit<TDocument> {
  error: MainError;
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
