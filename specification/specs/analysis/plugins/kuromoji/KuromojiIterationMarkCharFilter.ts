class KuromojiIterationMarkCharFilter extends CharFilterBase {
	@prop_serializer("NullableStringBooleanFormatter")
	normalize_kana: boolean;
	@prop_serializer("NullableStringBooleanFormatter")
	normalize_kanji: boolean;
}
