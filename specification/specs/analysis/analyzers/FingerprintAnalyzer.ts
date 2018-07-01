class FingerprintAnalyzer extends AnalyzerBase {
	separator: string;
	max_output_size: integer;
	preserve_original: boolean;
	@prop_serializer("StopWordsJsonConverter")
	stopwords: StopWords;
	stopwords_path: string;
}
