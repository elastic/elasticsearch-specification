class PhoneticTokenFilter extends TokenFilterBase {
	encoder: PhoneticEncoder;
	languageset: PhoneticLanguage[];
	@prop_serializer("NullableStringIntFormatter")
	max_code_len: integer;
	name_type: PhoneticNameType;
	@prop_serializer("NullableStringBooleanFormatter")
	replace: boolean;
	rule_type: PhoneticRuleType;
}
