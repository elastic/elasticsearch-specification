class SuggestOption<TDocument> {
	collate_match: boolean;
	contexts: Dictionary<string, Context[]>;
	fields: Dictionary<string, LazyDocument>;
	freq: long;
	highlighted: string;
	_id: string;
	_index: IndexName;
	/** This is a comment that will be exposed
   * @alternate_name SuggestScore
   * @prop_x he
   * **/
  _score: double;
  /** @alternate_name DocumentScore **/
	score: double;
	/** @prop_serializer SourceFormatter`1 */
	_source: TDocument;
	text: string;
}
