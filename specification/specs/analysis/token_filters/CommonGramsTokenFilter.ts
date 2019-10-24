class CommonGramsTokenFilter extends TokenFilterBase {
	common_words: string[];
	common_words_path: string;
	ignore_case: boolean;
	query_mode: boolean;
}
