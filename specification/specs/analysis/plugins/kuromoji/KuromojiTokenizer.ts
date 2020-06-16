class KuromojiTokenizer extends TokenizerBase {
	@prop_serializer("NullableStringBooleanFormatter")
	discard_punctuation: boolean;
	mode: KuromojiTokenizationMode;
	@prop_serializer("NullableStringIntFormatter")
	nbest_cost: integer;
	nbest_examples: string;
	user_dictionary: string;
	user_dictionary_rules: string[];
}
