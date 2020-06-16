class MultiplexerTokenFilter extends TokenFilterBase {
	filters: string[];
	@prop_serializer("NullableStringBooleanFormatter")
	preserve_original: boolean;
}
