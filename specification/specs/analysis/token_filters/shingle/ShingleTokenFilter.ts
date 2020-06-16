class ShingleTokenFilter extends TokenFilterBase {
	filler_token: string;
	@prop_serializer("NullableStringIntFormatter")
	max_shingle_size: integer;
	@prop_serializer("NullableStringIntFormatter")
	min_shingle_size: integer;
	@prop_serializer("NullableStringBooleanFormatter")
	output_unigrams: boolean;
	@prop_serializer("NullableStringBooleanFormatter")
	output_unigrams_if_no_shingles: boolean;
	token_separator: string;
}
