class MoreLikeThisQuery {
	analyzer: string;
	boost_terms: double;
	fields: Field[];
	include: boolean;
	like: Like[];
	max_doc_freq: integer;
	max_query_terms: integer;
	max_word_length: integer;
	min_doc_freq: integer;
	minimum_should_match: MinimumShouldMatch;
	min_term_freq: integer;
	min_word_length: integer;
	per_field_analyzer: Dictionary<Field, string>;
	routing: Routing;
	stop_words: StopWords;
	unlike: Like[];
	version: long;
	version_type: VersionType;
}
