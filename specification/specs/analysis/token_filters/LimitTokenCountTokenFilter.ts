class LimitTokenCountTokenFilter extends TokenFilterBase {
	@prop_serializer("NullableStringBooleanFormatter")
	consume_all_tokens: boolean;
	@prop_serializer("NullableStringIntFormatter")
	max_token_count: integer;
}
