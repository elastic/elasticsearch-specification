class LengthTokenFilter extends TokenFilterBase {
	@prop_serializer("NullableStringIntFormatter")
	max: integer;
	@prop_serializer("NullableStringIntFormatter")
	min: integer;
}
