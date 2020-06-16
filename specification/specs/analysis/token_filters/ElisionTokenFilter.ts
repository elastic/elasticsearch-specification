class ElisionTokenFilter extends TokenFilterBase {
	articles: string[];
	@prop_serializer("NullableStringBooleanFormatter")
	articles_case: boolean;
}
