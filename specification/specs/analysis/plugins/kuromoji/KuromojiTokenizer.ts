class KuromojiTokenizer extends TokenizerBase {
	discard_punctuation: boolean;
	mode: KuromojiTokenizationMode;
	nbest_cost: integer;
	nbest_examples: string;
	user_dictionary: string;
	user_dictionary_rules: string[];
}
