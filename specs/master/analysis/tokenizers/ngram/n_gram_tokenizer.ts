
/**namespace:Analysis.Tokenizers.NGram */
interface n_gram_tokenizer extends tokenizer_base {
	min_gram: integer;
	max_gram: integer;
	token_chars: TokenChar[];
}