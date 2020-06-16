class PatternTokenizer extends TokenizerBase {
	flags: string;
	@prop_serializer("NullableStringIntFormatter")
	group: integer;
	pattern: string;
}
