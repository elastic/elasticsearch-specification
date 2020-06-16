class KeywordMarkerTokenFilter extends TokenFilterBase {
	@prop_serializer("NullableStringBooleanFormatter")
	ignore_case: boolean;
	keywords: string[];
	keywords_path: string;
	keywords_pattern: string;
}
