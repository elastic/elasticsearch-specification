class NGramTokenizer extends TokenizerBase {
	custom_token_chars: string;
	/** @prop_serializer NullableStringIntFormatter */
	max_gram: integer;
	/** @prop_serializer NullableStringIntFormatter */
	min_gram: integer;
	token_chars: TokenChar[];
}
