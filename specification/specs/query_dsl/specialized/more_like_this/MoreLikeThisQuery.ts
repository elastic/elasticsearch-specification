class MoreLikeThisQuery {
	analyzer: string;
	boost_terms: double;
	fields: Field[];
	include: boolean;
	like: Like[];
	max_document_frequency: integer;
	max_query_terms: integer;
	max_word_length: integer;
	min_document_frequency: integer;
	minimum_should_match: MinimumShouldMatch;
	min_term_frequency: integer;
	min_word_length: integer;
	per_field_analyzer: Dictionary<Field, string>;
	routing: Routing;
	stop_words: StopWords;
	unlike: Like[];
	version: long;
	version_type: VersionType;
}
