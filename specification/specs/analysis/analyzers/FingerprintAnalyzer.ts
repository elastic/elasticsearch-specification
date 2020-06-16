class FingerprintAnalyzer extends AnalyzerBase {
	@prop_serializer("NullableStringIntFormatter")
	max_output_size: integer;
	@prop_serializer("NullableStringBooleanFormatter")
	preserve_original: boolean;
	separator: string;
	stopwords: StopWords;
	stopwords_path: string;
}
