class HunspellTokenFilter extends TokenFilterBase {
	@prop_serializer("NullableStringBooleanFormatter")
	dedup: boolean;
	dictionary: string;
	locale: string;
	@prop_serializer("NullableStringBooleanFormatter")
	longest_only: boolean;
}
