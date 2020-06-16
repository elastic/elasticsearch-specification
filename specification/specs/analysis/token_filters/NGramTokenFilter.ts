class NGramTokenFilter extends TokenFilterBase {
	@prop_serializer("NullableStringIntFormatter")
	max_gram: integer;
	@prop_serializer("NullableStringIntFormatter")
	min_gram: integer;
}
