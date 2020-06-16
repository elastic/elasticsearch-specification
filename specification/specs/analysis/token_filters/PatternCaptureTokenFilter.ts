class PatternCaptureTokenFilter extends TokenFilterBase {
	patterns: string[];
	@prop_serializer("NullableStringBooleanFormatter")
	preserve_original: boolean;
}
