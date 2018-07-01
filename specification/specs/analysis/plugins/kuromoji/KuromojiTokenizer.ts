class KuromojiTokenizer extends TokenizerBase {
	mode: KuromojiTokenizationMode;
	discard_punctuation: boolean;
	user_dictionary: string;
	nbest_examples: string;
	nbest_cost: integer;
}
