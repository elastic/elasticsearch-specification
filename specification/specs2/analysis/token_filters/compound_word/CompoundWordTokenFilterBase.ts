class CompoundWordTokenFilterBase extends TokenFilterBase {
	word_list: string[];
	word_list_path: string;
	min_word_size: integer;
	min_subword_size: integer;
	max_subword_size: integer;
	only_longest_match: boolean;
	hyphenation_patterns_path: string;
}
