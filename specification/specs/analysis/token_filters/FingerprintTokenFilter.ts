class FingerprintTokenFilter extends TokenFilterBase {
	@prop_serializer("NullableStringIntFormatter")
	max_output_size: integer;
	separator: string;
}
