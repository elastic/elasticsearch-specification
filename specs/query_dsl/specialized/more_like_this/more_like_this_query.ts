
/**namespace:QueryDsl.Specialized.MoreLikeThis */
/**custom_serialization*/
interface more_like_this_query {
	fields: field[];
	like: like[];
	unlike: like[];
	max_query_terms: integer;
	min_term_freq: integer;
	min_doc_freq: integer;
	max_doc_freq: integer;
	min_word_len: integer;
	max_word_len: integer;
	stop_words: stop_words;
	analyzer: string;
	minimum_should_match: minimum_should_match;
	boost_terms: double;
	include: boolean;
}