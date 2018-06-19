class StopTokenFilter extends TokenFilterBase {
	@prop_serializer("StopWordsJsonConverter")
	stopwords: StopWords;
	ignore_case: boolean;
	stopwords_path: string;
	remove_trailing: boolean;
}
