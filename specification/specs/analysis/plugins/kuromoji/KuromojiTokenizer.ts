class KuromojiTokenizer extends TokenizerBase {
	discard_punctuation: boolean;
	mode: KuromojiTokenizationMode;
	n_best_cost: integer;
	n_best_examples: string;
	user_dictionary: string;
	user_dictionary_rules: string[];
}
