class StopTokenFilter extends TokenFilterBase {
	ignore_case: boolean;
	remove_trailing: boolean;
	stop_words: StopWords;
	stop_words_path: string;
}
