class IcuCollationTokenFilter extends TokenFilterBase {
	alternate: IcuCollationAlternate;
	caseFirst: IcuCollationCaseFirst;
	@prop_serializer("NullableStringBooleanFormatter")
	caseLevel: boolean;
	country: string;
	decomposition: IcuCollationDecomposition;
	@prop_serializer("NullableStringBooleanFormatter")
	hiraganaQuaternaryMode: boolean;
	language: string;
	@prop_serializer("NullableStringBooleanFormatter")
	numeric: boolean;
	strength: IcuCollationStrength;
	variableTop: string;
	variant: string;
}
